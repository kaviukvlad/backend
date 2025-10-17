
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
 * Model DriverProfile
 * 
 */
export type DriverProfile = $Result.DefaultSelection<Prisma.$DriverProfilePayload>
/**
 * Model AdminProfile
 * 
 */
export type AdminProfile = $Result.DefaultSelection<Prisma.$AdminProfilePayload>
/**
 * Model ClientProfile
 * 
 */
export type ClientProfile = $Result.DefaultSelection<Prisma.$ClientProfilePayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model VehicleMedia
 * 
 */
export type VehicleMedia = $Result.DefaultSelection<Prisma.$VehicleMediaPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model VehicleType
 * 
 */
export type VehicleType = $Result.DefaultSelection<Prisma.$VehicleTypePayload>
/**
 * Model RegionTranslation
 * 
 */
export type RegionTranslation = $Result.DefaultSelection<Prisma.$RegionTranslationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  DRIVER: 'DRIVER',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DocumentStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]


export const VehicleVerificationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type VehicleVerificationStatus = (typeof VehicleVerificationStatus)[keyof typeof VehicleVerificationStatus]


export const OrderStatus: {
  NEW: 'NEW',
  ACCEPTED: 'ACCEPTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const RegionType: {
  COUNTRY: 'COUNTRY',
  CITY: 'CITY',
  AIRPORT: 'AIRPORT',
  LOCATION: 'LOCATION'
};

export type RegionType = (typeof RegionType)[keyof typeof RegionType]


export const MediaType: {
  PHOTO: 'PHOTO',
  VIDEO: 'VIDEO'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const DocumentType: {
  DRIVERS_LICENSE: 'DRIVERS_LICENSE',
  VEHICLE_REGISTRATION: 'VEHICLE_REGISTRATION',
  SELFIE_WITH_LICENSE: 'SELFIE_WITH_LICENSE'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

export type VehicleVerificationStatus = $Enums.VehicleVerificationStatus

export const VehicleVerificationStatus: typeof $Enums.VehicleVerificationStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type RegionType = $Enums.RegionType

export const RegionType: typeof $Enums.RegionType

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * `prisma.driverProfile`: Exposes CRUD operations for the **DriverProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriverProfiles
    * const driverProfiles = await prisma.driverProfile.findMany()
    * ```
    */
  get driverProfile(): Prisma.DriverProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminProfile`: Exposes CRUD operations for the **AdminProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminProfiles
    * const adminProfiles = await prisma.adminProfile.findMany()
    * ```
    */
  get adminProfile(): Prisma.AdminProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientProfile`: Exposes CRUD operations for the **ClientProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientProfiles
    * const clientProfiles = await prisma.clientProfile.findMany()
    * ```
    */
  get clientProfile(): Prisma.ClientProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleMedia`: Exposes CRUD operations for the **VehicleMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleMedias
    * const vehicleMedias = await prisma.vehicleMedia.findMany()
    * ```
    */
  get vehicleMedia(): Prisma.VehicleMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleType`: Exposes CRUD operations for the **VehicleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleTypes
    * const vehicleTypes = await prisma.vehicleType.findMany()
    * ```
    */
  get vehicleType(): Prisma.VehicleTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regionTranslation`: Exposes CRUD operations for the **RegionTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegionTranslations
    * const regionTranslations = await prisma.regionTranslation.findMany()
    * ```
    */
  get regionTranslation(): Prisma.RegionTranslationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    DriverProfile: 'DriverProfile',
    AdminProfile: 'AdminProfile',
    ClientProfile: 'ClientProfile',
    Car: 'Car',
    VehicleMedia: 'VehicleMedia',
    Order: 'Order',
    Rating: 'Rating',
    Document: 'Document',
    AuditLog: 'AuditLog',
    Region: 'Region',
    VehicleType: 'VehicleType',
    RegionTranslation: 'RegionTranslation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "driverProfile" | "adminProfile" | "clientProfile" | "car" | "vehicleMedia" | "order" | "rating" | "document" | "auditLog" | "region" | "vehicleType" | "regionTranslation"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      DriverProfile: {
        payload: Prisma.$DriverProfilePayload<ExtArgs>
        fields: Prisma.DriverProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          findFirst: {
            args: Prisma.DriverProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          findMany: {
            args: Prisma.DriverProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>[]
          }
          create: {
            args: Prisma.DriverProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          createMany: {
            args: Prisma.DriverProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>[]
          }
          delete: {
            args: Prisma.DriverProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          update: {
            args: Prisma.DriverProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          deleteMany: {
            args: Prisma.DriverProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>[]
          }
          upsert: {
            args: Prisma.DriverProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverProfilePayload>
          }
          aggregate: {
            args: Prisma.DriverProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriverProfile>
          }
          groupBy: {
            args: Prisma.DriverProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverProfileCountArgs<ExtArgs>
            result: $Utils.Optional<DriverProfileCountAggregateOutputType> | number
          }
        }
      }
      AdminProfile: {
        payload: Prisma.$AdminProfilePayload<ExtArgs>
        fields: Prisma.AdminProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          findFirst: {
            args: Prisma.AdminProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          findMany: {
            args: Prisma.AdminProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          create: {
            args: Prisma.AdminProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          createMany: {
            args: Prisma.AdminProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          delete: {
            args: Prisma.AdminProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          update: {
            args: Prisma.AdminProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          deleteMany: {
            args: Prisma.AdminProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          upsert: {
            args: Prisma.AdminProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          aggregate: {
            args: Prisma.AdminProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminProfile>
          }
          groupBy: {
            args: Prisma.AdminProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminProfileCountArgs<ExtArgs>
            result: $Utils.Optional<AdminProfileCountAggregateOutputType> | number
          }
        }
      }
      ClientProfile: {
        payload: Prisma.$ClientProfilePayload<ExtArgs>
        fields: Prisma.ClientProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          findFirst: {
            args: Prisma.ClientProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          findMany: {
            args: Prisma.ClientProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>[]
          }
          create: {
            args: Prisma.ClientProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          createMany: {
            args: Prisma.ClientProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>[]
          }
          delete: {
            args: Prisma.ClientProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          update: {
            args: Prisma.ClientProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          deleteMany: {
            args: Prisma.ClientProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>[]
          }
          upsert: {
            args: Prisma.ClientProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          aggregate: {
            args: Prisma.ClientProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientProfile>
          }
          groupBy: {
            args: Prisma.ClientProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ClientProfileCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      VehicleMedia: {
        payload: Prisma.$VehicleMediaPayload<ExtArgs>
        fields: Prisma.VehicleMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload>
          }
          findFirst: {
            args: Prisma.VehicleMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload>
          }
          findMany: {
            args: Prisma.VehicleMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload>[]
          }
          create: {
            args: Prisma.VehicleMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload>
          }
          createMany: {
            args: Prisma.VehicleMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload>[]
          }
          delete: {
            args: Prisma.VehicleMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload>
          }
          update: {
            args: Prisma.VehicleMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload>
          }
          deleteMany: {
            args: Prisma.VehicleMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload>[]
          }
          upsert: {
            args: Prisma.VehicleMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleMediaPayload>
          }
          aggregate: {
            args: Prisma.VehicleMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleMedia>
          }
          groupBy: {
            args: Prisma.VehicleMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleMediaCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleMediaCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      VehicleType: {
        payload: Prisma.$VehicleTypePayload<ExtArgs>
        fields: Prisma.VehicleTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findFirst: {
            args: Prisma.VehicleTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findMany: {
            args: Prisma.VehicleTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          create: {
            args: Prisma.VehicleTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          createMany: {
            args: Prisma.VehicleTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          delete: {
            args: Prisma.VehicleTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          update: {
            args: Prisma.VehicleTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          deleteMany: {
            args: Prisma.VehicleTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          upsert: {
            args: Prisma.VehicleTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          aggregate: {
            args: Prisma.VehicleTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleType>
          }
          groupBy: {
            args: Prisma.VehicleTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleTypeCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleTypeCountAggregateOutputType> | number
          }
        }
      }
      RegionTranslation: {
        payload: Prisma.$RegionTranslationPayload<ExtArgs>
        fields: Prisma.RegionTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload>
          }
          findFirst: {
            args: Prisma.RegionTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload>
          }
          findMany: {
            args: Prisma.RegionTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload>[]
          }
          create: {
            args: Prisma.RegionTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload>
          }
          createMany: {
            args: Prisma.RegionTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionTranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload>[]
          }
          delete: {
            args: Prisma.RegionTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload>
          }
          update: {
            args: Prisma.RegionTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload>
          }
          deleteMany: {
            args: Prisma.RegionTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionTranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload>[]
          }
          upsert: {
            args: Prisma.RegionTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionTranslationPayload>
          }
          aggregate: {
            args: Prisma.RegionTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegionTranslation>
          }
          groupBy: {
            args: Prisma.RegionTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<RegionTranslationCountAggregateOutputType> | number
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    driverProfile?: DriverProfileOmit
    adminProfile?: AdminProfileOmit
    clientProfile?: ClientProfileOmit
    car?: CarOmit
    vehicleMedia?: VehicleMediaOmit
    order?: OrderOmit
    rating?: RatingOmit
    document?: DocumentOmit
    auditLog?: AuditLogOmit
    region?: RegionOmit
    vehicleType?: VehicleTypeOmit
    regionTranslation?: RegionTranslationOmit
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
   * Count Type DriverProfileCountOutputType
   */

  export type DriverProfileCountOutputType = {
    cars: number
    documents: number
    orders: number
    ratings: number
  }

  export type DriverProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | DriverProfileCountOutputTypeCountCarsArgs
    documents?: boolean | DriverProfileCountOutputTypeCountDocumentsArgs
    orders?: boolean | DriverProfileCountOutputTypeCountOrdersArgs
    ratings?: boolean | DriverProfileCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * DriverProfileCountOutputType without action
   */
  export type DriverProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfileCountOutputType
     */
    select?: DriverProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverProfileCountOutputType without action
   */
  export type DriverProfileCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

  /**
   * DriverProfileCountOutputType without action
   */
  export type DriverProfileCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * DriverProfileCountOutputType without action
   */
  export type DriverProfileCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * DriverProfileCountOutputType without action
   */
  export type DriverProfileCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type AdminProfileCountOutputType
   */

  export type AdminProfileCountOutputType = {
    audit_logs: number
  }

  export type AdminProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | AdminProfileCountOutputTypeCountAudit_logsArgs
  }

  // Custom InputTypes
  /**
   * AdminProfileCountOutputType without action
   */
  export type AdminProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfileCountOutputType
     */
    select?: AdminProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminProfileCountOutputType without action
   */
  export type AdminProfileCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type ClientProfileCountOutputType
   */

  export type ClientProfileCountOutputType = {
    orders: number
    ratings: number
  }

  export type ClientProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ClientProfileCountOutputTypeCountOrdersArgs
    ratings?: boolean | ClientProfileCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * ClientProfileCountOutputType without action
   */
  export type ClientProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfileCountOutputType
     */
    select?: ClientProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientProfileCountOutputType without action
   */
  export type ClientProfileCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ClientProfileCountOutputType without action
   */
  export type ClientProfileCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    orders: number
    media: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CarCountOutputTypeCountOrdersArgs
    media?: boolean | CarCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleMediaWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    children: number
    drivers: number
    translations: number
    orders: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | RegionCountOutputTypeCountChildrenArgs
    drivers?: boolean | RegionCountOutputTypeCountDriversArgs
    translations?: boolean | RegionCountOutputTypeCountTranslationsArgs
    orders?: boolean | RegionCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverProfileWhereInput
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionTranslationWhereInput
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type VehicleTypeCountOutputType
   */

  export type VehicleTypeCountOutputType = {
    cars: number
  }

  export type VehicleTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | VehicleTypeCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * VehicleTypeCountOutputType without action
   */
  export type VehicleTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleTypeCountOutputType
     */
    select?: VehicleTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleTypeCountOutputType without action
   */
  export type VehicleTypeCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
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
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    phone: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    role?: true
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
    email: string
    password: string
    phone: string | null
    role: $Enums.UserRole
    createdAt: Date
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
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driverProfile?: boolean | User$driverProfileArgs<ExtArgs>
    adminProfile?: boolean | User$adminProfileArgs<ExtArgs>
    clientProfile?: boolean | User$clientProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "phone" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driverProfile?: boolean | User$driverProfileArgs<ExtArgs>
    adminProfile?: boolean | User$adminProfileArgs<ExtArgs>
    clientProfile?: boolean | User$clientProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      driverProfile: Prisma.$DriverProfilePayload<ExtArgs> | null
      adminProfile: Prisma.$AdminProfilePayload<ExtArgs> | null
      clientProfile: Prisma.$ClientProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      phone: string | null
      role: $Enums.UserRole
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    driverProfile<T extends User$driverProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$driverProfileArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    adminProfile<T extends User$adminProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$adminProfileArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clientProfile<T extends User$clientProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$clientProfileArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.driverProfile
   */
  export type User$driverProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    where?: DriverProfileWhereInput
  }

  /**
   * User.adminProfile
   */
  export type User$adminProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    where?: AdminProfileWhereInput
  }

  /**
   * User.clientProfile
   */
  export type User$clientProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    where?: ClientProfileWhereInput
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
   * Model DriverProfile
   */

  export type AggregateDriverProfile = {
    _count: DriverProfileCountAggregateOutputType | null
    _avg: DriverProfileAvgAggregateOutputType | null
    _sum: DriverProfileSumAggregateOutputType | null
    _min: DriverProfileMinAggregateOutputType | null
    _max: DriverProfileMaxAggregateOutputType | null
  }

  export type DriverProfileAvgAggregateOutputType = {
    rating: number | null
    status: number | null
  }

  export type DriverProfileSumAggregateOutputType = {
    rating: number | null
    status: number | null
  }

  export type DriverProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    regionId: string | null
    rating: number | null
    status: number | null
  }

  export type DriverProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    regionId: string | null
    rating: number | null
    status: number | null
  }

  export type DriverProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    regionId: number
    rating: number
    status: number
    _all: number
  }


  export type DriverProfileAvgAggregateInputType = {
    rating?: true
    status?: true
  }

  export type DriverProfileSumAggregateInputType = {
    rating?: true
    status?: true
  }

  export type DriverProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    regionId?: true
    rating?: true
    status?: true
  }

  export type DriverProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    regionId?: true
    rating?: true
    status?: true
  }

  export type DriverProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    regionId?: true
    rating?: true
    status?: true
    _all?: true
  }

  export type DriverProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverProfile to aggregate.
     */
    where?: DriverProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverProfiles to fetch.
     */
    orderBy?: DriverProfileOrderByWithRelationInput | DriverProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriverProfiles
    **/
    _count?: true | DriverProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverProfileMaxAggregateInputType
  }

  export type GetDriverProfileAggregateType<T extends DriverProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateDriverProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriverProfile[P]>
      : GetScalarType<T[P], AggregateDriverProfile[P]>
  }




  export type DriverProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverProfileWhereInput
    orderBy?: DriverProfileOrderByWithAggregationInput | DriverProfileOrderByWithAggregationInput[]
    by: DriverProfileScalarFieldEnum[] | DriverProfileScalarFieldEnum
    having?: DriverProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverProfileCountAggregateInputType | true
    _avg?: DriverProfileAvgAggregateInputType
    _sum?: DriverProfileSumAggregateInputType
    _min?: DriverProfileMinAggregateInputType
    _max?: DriverProfileMaxAggregateInputType
  }

  export type DriverProfileGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    regionId: string | null
    rating: number
    status: number
    _count: DriverProfileCountAggregateOutputType | null
    _avg: DriverProfileAvgAggregateOutputType | null
    _sum: DriverProfileSumAggregateOutputType | null
    _min: DriverProfileMinAggregateOutputType | null
    _max: DriverProfileMaxAggregateOutputType | null
  }

  type GetDriverProfileGroupByPayload<T extends DriverProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverProfileGroupByOutputType[P]>
            : GetScalarType<T[P], DriverProfileGroupByOutputType[P]>
        }
      >
    >


  export type DriverProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    regionId?: boolean
    rating?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    region?: boolean | DriverProfile$regionArgs<ExtArgs>
    cars?: boolean | DriverProfile$carsArgs<ExtArgs>
    documents?: boolean | DriverProfile$documentsArgs<ExtArgs>
    orders?: boolean | DriverProfile$ordersArgs<ExtArgs>
    ratings?: boolean | DriverProfile$ratingsArgs<ExtArgs>
    _count?: boolean | DriverProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverProfile"]>

  export type DriverProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    regionId?: boolean
    rating?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    region?: boolean | DriverProfile$regionArgs<ExtArgs>
  }, ExtArgs["result"]["driverProfile"]>

  export type DriverProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    regionId?: boolean
    rating?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    region?: boolean | DriverProfile$regionArgs<ExtArgs>
  }, ExtArgs["result"]["driverProfile"]>

  export type DriverProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    regionId?: boolean
    rating?: boolean
    status?: boolean
  }

  export type DriverProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "regionId" | "rating" | "status", ExtArgs["result"]["driverProfile"]>
  export type DriverProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    region?: boolean | DriverProfile$regionArgs<ExtArgs>
    cars?: boolean | DriverProfile$carsArgs<ExtArgs>
    documents?: boolean | DriverProfile$documentsArgs<ExtArgs>
    orders?: boolean | DriverProfile$ordersArgs<ExtArgs>
    ratings?: boolean | DriverProfile$ratingsArgs<ExtArgs>
    _count?: boolean | DriverProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    region?: boolean | DriverProfile$regionArgs<ExtArgs>
  }
  export type DriverProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    region?: boolean | DriverProfile$regionArgs<ExtArgs>
  }

  export type $DriverProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriverProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      region: Prisma.$RegionPayload<ExtArgs> | null
      cars: Prisma.$CarPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
      regionId: string | null
      rating: number
      status: number
    }, ExtArgs["result"]["driverProfile"]>
    composites: {}
  }

  type DriverProfileGetPayload<S extends boolean | null | undefined | DriverProfileDefaultArgs> = $Result.GetResult<Prisma.$DriverProfilePayload, S>

  type DriverProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverProfileCountAggregateInputType | true
    }

  export interface DriverProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriverProfile'], meta: { name: 'DriverProfile' } }
    /**
     * Find zero or one DriverProfile that matches the filter.
     * @param {DriverProfileFindUniqueArgs} args - Arguments to find a DriverProfile
     * @example
     * // Get one DriverProfile
     * const driverProfile = await prisma.driverProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverProfileFindUniqueArgs>(args: SelectSubset<T, DriverProfileFindUniqueArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DriverProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverProfileFindUniqueOrThrowArgs} args - Arguments to find a DriverProfile
     * @example
     * // Get one DriverProfile
     * const driverProfile = await prisma.driverProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileFindFirstArgs} args - Arguments to find a DriverProfile
     * @example
     * // Get one DriverProfile
     * const driverProfile = await prisma.driverProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverProfileFindFirstArgs>(args?: SelectSubset<T, DriverProfileFindFirstArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileFindFirstOrThrowArgs} args - Arguments to find a DriverProfile
     * @example
     * // Get one DriverProfile
     * const driverProfile = await prisma.driverProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DriverProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriverProfiles
     * const driverProfiles = await prisma.driverProfile.findMany()
     * 
     * // Get first 10 DriverProfiles
     * const driverProfiles = await prisma.driverProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverProfileWithIdOnly = await prisma.driverProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverProfileFindManyArgs>(args?: SelectSubset<T, DriverProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DriverProfile.
     * @param {DriverProfileCreateArgs} args - Arguments to create a DriverProfile.
     * @example
     * // Create one DriverProfile
     * const DriverProfile = await prisma.driverProfile.create({
     *   data: {
     *     // ... data to create a DriverProfile
     *   }
     * })
     * 
     */
    create<T extends DriverProfileCreateArgs>(args: SelectSubset<T, DriverProfileCreateArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DriverProfiles.
     * @param {DriverProfileCreateManyArgs} args - Arguments to create many DriverProfiles.
     * @example
     * // Create many DriverProfiles
     * const driverProfile = await prisma.driverProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverProfileCreateManyArgs>(args?: SelectSubset<T, DriverProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriverProfiles and returns the data saved in the database.
     * @param {DriverProfileCreateManyAndReturnArgs} args - Arguments to create many DriverProfiles.
     * @example
     * // Create many DriverProfiles
     * const driverProfile = await prisma.driverProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriverProfiles and only return the `id`
     * const driverProfileWithIdOnly = await prisma.driverProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DriverProfile.
     * @param {DriverProfileDeleteArgs} args - Arguments to delete one DriverProfile.
     * @example
     * // Delete one DriverProfile
     * const DriverProfile = await prisma.driverProfile.delete({
     *   where: {
     *     // ... filter to delete one DriverProfile
     *   }
     * })
     * 
     */
    delete<T extends DriverProfileDeleteArgs>(args: SelectSubset<T, DriverProfileDeleteArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DriverProfile.
     * @param {DriverProfileUpdateArgs} args - Arguments to update one DriverProfile.
     * @example
     * // Update one DriverProfile
     * const driverProfile = await prisma.driverProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverProfileUpdateArgs>(args: SelectSubset<T, DriverProfileUpdateArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DriverProfiles.
     * @param {DriverProfileDeleteManyArgs} args - Arguments to filter DriverProfiles to delete.
     * @example
     * // Delete a few DriverProfiles
     * const { count } = await prisma.driverProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverProfileDeleteManyArgs>(args?: SelectSubset<T, DriverProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriverProfiles
     * const driverProfile = await prisma.driverProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverProfileUpdateManyArgs>(args: SelectSubset<T, DriverProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverProfiles and returns the data updated in the database.
     * @param {DriverProfileUpdateManyAndReturnArgs} args - Arguments to update many DriverProfiles.
     * @example
     * // Update many DriverProfiles
     * const driverProfile = await prisma.driverProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DriverProfiles and only return the `id`
     * const driverProfileWithIdOnly = await prisma.driverProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DriverProfile.
     * @param {DriverProfileUpsertArgs} args - Arguments to update or create a DriverProfile.
     * @example
     * // Update or create a DriverProfile
     * const driverProfile = await prisma.driverProfile.upsert({
     *   create: {
     *     // ... data to create a DriverProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriverProfile we want to update
     *   }
     * })
     */
    upsert<T extends DriverProfileUpsertArgs>(args: SelectSubset<T, DriverProfileUpsertArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DriverProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileCountArgs} args - Arguments to filter DriverProfiles to count.
     * @example
     * // Count the number of DriverProfiles
     * const count = await prisma.driverProfile.count({
     *   where: {
     *     // ... the filter for the DriverProfiles we want to count
     *   }
     * })
    **/
    count<T extends DriverProfileCountArgs>(
      args?: Subset<T, DriverProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriverProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverProfileAggregateArgs>(args: Subset<T, DriverProfileAggregateArgs>): Prisma.PrismaPromise<GetDriverProfileAggregateType<T>>

    /**
     * Group by DriverProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverProfileGroupByArgs} args - Group by arguments.
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
      T extends DriverProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverProfileGroupByArgs['orderBy'] }
        : { orderBy?: DriverProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriverProfile model
   */
  readonly fields: DriverProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriverProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    region<T extends DriverProfile$regionArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfile$regionArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cars<T extends DriverProfile$carsArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfile$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends DriverProfile$documentsArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfile$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends DriverProfile$ordersArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfile$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends DriverProfile$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfile$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DriverProfile model
   */
  interface DriverProfileFieldRefs {
    readonly id: FieldRef<"DriverProfile", 'String'>
    readonly userId: FieldRef<"DriverProfile", 'String'>
    readonly name: FieldRef<"DriverProfile", 'String'>
    readonly regionId: FieldRef<"DriverProfile", 'String'>
    readonly rating: FieldRef<"DriverProfile", 'Float'>
    readonly status: FieldRef<"DriverProfile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DriverProfile findUnique
   */
  export type DriverProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfile to fetch.
     */
    where: DriverProfileWhereUniqueInput
  }

  /**
   * DriverProfile findUniqueOrThrow
   */
  export type DriverProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfile to fetch.
     */
    where: DriverProfileWhereUniqueInput
  }

  /**
   * DriverProfile findFirst
   */
  export type DriverProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfile to fetch.
     */
    where?: DriverProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverProfiles to fetch.
     */
    orderBy?: DriverProfileOrderByWithRelationInput | DriverProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverProfiles.
     */
    cursor?: DriverProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverProfiles.
     */
    distinct?: DriverProfileScalarFieldEnum | DriverProfileScalarFieldEnum[]
  }

  /**
   * DriverProfile findFirstOrThrow
   */
  export type DriverProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfile to fetch.
     */
    where?: DriverProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverProfiles to fetch.
     */
    orderBy?: DriverProfileOrderByWithRelationInput | DriverProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverProfiles.
     */
    cursor?: DriverProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverProfiles.
     */
    distinct?: DriverProfileScalarFieldEnum | DriverProfileScalarFieldEnum[]
  }

  /**
   * DriverProfile findMany
   */
  export type DriverProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter, which DriverProfiles to fetch.
     */
    where?: DriverProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverProfiles to fetch.
     */
    orderBy?: DriverProfileOrderByWithRelationInput | DriverProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriverProfiles.
     */
    cursor?: DriverProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverProfiles.
     */
    skip?: number
    distinct?: DriverProfileScalarFieldEnum | DriverProfileScalarFieldEnum[]
  }

  /**
   * DriverProfile create
   */
  export type DriverProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a DriverProfile.
     */
    data: XOR<DriverProfileCreateInput, DriverProfileUncheckedCreateInput>
  }

  /**
   * DriverProfile createMany
   */
  export type DriverProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriverProfiles.
     */
    data: DriverProfileCreateManyInput | DriverProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriverProfile createManyAndReturn
   */
  export type DriverProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * The data used to create many DriverProfiles.
     */
    data: DriverProfileCreateManyInput | DriverProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverProfile update
   */
  export type DriverProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a DriverProfile.
     */
    data: XOR<DriverProfileUpdateInput, DriverProfileUncheckedUpdateInput>
    /**
     * Choose, which DriverProfile to update.
     */
    where: DriverProfileWhereUniqueInput
  }

  /**
   * DriverProfile updateMany
   */
  export type DriverProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriverProfiles.
     */
    data: XOR<DriverProfileUpdateManyMutationInput, DriverProfileUncheckedUpdateManyInput>
    /**
     * Filter which DriverProfiles to update
     */
    where?: DriverProfileWhereInput
    /**
     * Limit how many DriverProfiles to update.
     */
    limit?: number
  }

  /**
   * DriverProfile updateManyAndReturn
   */
  export type DriverProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * The data used to update DriverProfiles.
     */
    data: XOR<DriverProfileUpdateManyMutationInput, DriverProfileUncheckedUpdateManyInput>
    /**
     * Filter which DriverProfiles to update
     */
    where?: DriverProfileWhereInput
    /**
     * Limit how many DriverProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverProfile upsert
   */
  export type DriverProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the DriverProfile to update in case it exists.
     */
    where: DriverProfileWhereUniqueInput
    /**
     * In case the DriverProfile found by the `where` argument doesn't exist, create a new DriverProfile with this data.
     */
    create: XOR<DriverProfileCreateInput, DriverProfileUncheckedCreateInput>
    /**
     * In case the DriverProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverProfileUpdateInput, DriverProfileUncheckedUpdateInput>
  }

  /**
   * DriverProfile delete
   */
  export type DriverProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    /**
     * Filter which DriverProfile to delete.
     */
    where: DriverProfileWhereUniqueInput
  }

  /**
   * DriverProfile deleteMany
   */
  export type DriverProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverProfiles to delete
     */
    where?: DriverProfileWhereInput
    /**
     * Limit how many DriverProfiles to delete.
     */
    limit?: number
  }

  /**
   * DriverProfile.region
   */
  export type DriverProfile$regionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
  }

  /**
   * DriverProfile.cars
   */
  export type DriverProfile$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * DriverProfile.documents
   */
  export type DriverProfile$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * DriverProfile.orders
   */
  export type DriverProfile$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * DriverProfile.ratings
   */
  export type DriverProfile$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * DriverProfile without action
   */
  export type DriverProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
  }


  /**
   * Model AdminProfile
   */

  export type AggregateAdminProfile = {
    _count: AdminProfileCountAggregateOutputType | null
    _min: AdminProfileMinAggregateOutputType | null
    _max: AdminProfileMaxAggregateOutputType | null
  }

  export type AdminProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type AdminProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type AdminProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    _all: number
  }


  export type AdminProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type AdminProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type AdminProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type AdminProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProfile to aggregate.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminProfiles
    **/
    _count?: true | AdminProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminProfileMaxAggregateInputType
  }

  export type GetAdminProfileAggregateType<T extends AdminProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminProfile[P]>
      : GetScalarType<T[P], AggregateAdminProfile[P]>
  }




  export type AdminProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminProfileWhereInput
    orderBy?: AdminProfileOrderByWithAggregationInput | AdminProfileOrderByWithAggregationInput[]
    by: AdminProfileScalarFieldEnum[] | AdminProfileScalarFieldEnum
    having?: AdminProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminProfileCountAggregateInputType | true
    _min?: AdminProfileMinAggregateInputType
    _max?: AdminProfileMaxAggregateInputType
  }

  export type AdminProfileGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    _count: AdminProfileCountAggregateOutputType | null
    _min: AdminProfileMinAggregateOutputType | null
    _max: AdminProfileMaxAggregateOutputType | null
  }

  type GetAdminProfileGroupByPayload<T extends AdminProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminProfileGroupByOutputType[P]>
            : GetScalarType<T[P], AdminProfileGroupByOutputType[P]>
        }
      >
    >


  export type AdminProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    audit_logs?: boolean | AdminProfile$audit_logsArgs<ExtArgs>
    _count?: boolean | AdminProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
  }

  export type AdminProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name", ExtArgs["result"]["adminProfile"]>
  export type AdminProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    audit_logs?: boolean | AdminProfile$audit_logsArgs<ExtArgs>
    _count?: boolean | AdminProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      audit_logs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
    }, ExtArgs["result"]["adminProfile"]>
    composites: {}
  }

  type AdminProfileGetPayload<S extends boolean | null | undefined | AdminProfileDefaultArgs> = $Result.GetResult<Prisma.$AdminProfilePayload, S>

  type AdminProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminProfileCountAggregateInputType | true
    }

  export interface AdminProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminProfile'], meta: { name: 'AdminProfile' } }
    /**
     * Find zero or one AdminProfile that matches the filter.
     * @param {AdminProfileFindUniqueArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminProfileFindUniqueArgs>(args: SelectSubset<T, AdminProfileFindUniqueArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminProfileFindUniqueOrThrowArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindFirstArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminProfileFindFirstArgs>(args?: SelectSubset<T, AdminProfileFindFirstArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindFirstOrThrowArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminProfiles
     * const adminProfiles = await prisma.adminProfile.findMany()
     * 
     * // Get first 10 AdminProfiles
     * const adminProfiles = await prisma.adminProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminProfileFindManyArgs>(args?: SelectSubset<T, AdminProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminProfile.
     * @param {AdminProfileCreateArgs} args - Arguments to create a AdminProfile.
     * @example
     * // Create one AdminProfile
     * const AdminProfile = await prisma.adminProfile.create({
     *   data: {
     *     // ... data to create a AdminProfile
     *   }
     * })
     * 
     */
    create<T extends AdminProfileCreateArgs>(args: SelectSubset<T, AdminProfileCreateArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminProfiles.
     * @param {AdminProfileCreateManyArgs} args - Arguments to create many AdminProfiles.
     * @example
     * // Create many AdminProfiles
     * const adminProfile = await prisma.adminProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminProfileCreateManyArgs>(args?: SelectSubset<T, AdminProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminProfiles and returns the data saved in the database.
     * @param {AdminProfileCreateManyAndReturnArgs} args - Arguments to create many AdminProfiles.
     * @example
     * // Create many AdminProfiles
     * const adminProfile = await prisma.adminProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminProfiles and only return the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminProfile.
     * @param {AdminProfileDeleteArgs} args - Arguments to delete one AdminProfile.
     * @example
     * // Delete one AdminProfile
     * const AdminProfile = await prisma.adminProfile.delete({
     *   where: {
     *     // ... filter to delete one AdminProfile
     *   }
     * })
     * 
     */
    delete<T extends AdminProfileDeleteArgs>(args: SelectSubset<T, AdminProfileDeleteArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminProfile.
     * @param {AdminProfileUpdateArgs} args - Arguments to update one AdminProfile.
     * @example
     * // Update one AdminProfile
     * const adminProfile = await prisma.adminProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminProfileUpdateArgs>(args: SelectSubset<T, AdminProfileUpdateArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminProfiles.
     * @param {AdminProfileDeleteManyArgs} args - Arguments to filter AdminProfiles to delete.
     * @example
     * // Delete a few AdminProfiles
     * const { count } = await prisma.adminProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminProfileDeleteManyArgs>(args?: SelectSubset<T, AdminProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminProfiles
     * const adminProfile = await prisma.adminProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminProfileUpdateManyArgs>(args: SelectSubset<T, AdminProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminProfiles and returns the data updated in the database.
     * @param {AdminProfileUpdateManyAndReturnArgs} args - Arguments to update many AdminProfiles.
     * @example
     * // Update many AdminProfiles
     * const adminProfile = await prisma.adminProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminProfiles and only return the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminProfile.
     * @param {AdminProfileUpsertArgs} args - Arguments to update or create a AdminProfile.
     * @example
     * // Update or create a AdminProfile
     * const adminProfile = await prisma.adminProfile.upsert({
     *   create: {
     *     // ... data to create a AdminProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminProfile we want to update
     *   }
     * })
     */
    upsert<T extends AdminProfileUpsertArgs>(args: SelectSubset<T, AdminProfileUpsertArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileCountArgs} args - Arguments to filter AdminProfiles to count.
     * @example
     * // Count the number of AdminProfiles
     * const count = await prisma.adminProfile.count({
     *   where: {
     *     // ... the filter for the AdminProfiles we want to count
     *   }
     * })
    **/
    count<T extends AdminProfileCountArgs>(
      args?: Subset<T, AdminProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminProfileAggregateArgs>(args: Subset<T, AdminProfileAggregateArgs>): Prisma.PrismaPromise<GetAdminProfileAggregateType<T>>

    /**
     * Group by AdminProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileGroupByArgs} args - Group by arguments.
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
      T extends AdminProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminProfileGroupByArgs['orderBy'] }
        : { orderBy?: AdminProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminProfile model
   */
  readonly fields: AdminProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    audit_logs<T extends AdminProfile$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, AdminProfile$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AdminProfile model
   */
  interface AdminProfileFieldRefs {
    readonly id: FieldRef<"AdminProfile", 'String'>
    readonly userId: FieldRef<"AdminProfile", 'String'>
    readonly name: FieldRef<"AdminProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdminProfile findUnique
   */
  export type AdminProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile findUniqueOrThrow
   */
  export type AdminProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile findFirst
   */
  export type AdminProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminProfiles.
     */
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile findFirstOrThrow
   */
  export type AdminProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminProfiles.
     */
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile findMany
   */
  export type AdminProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfiles to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile create
   */
  export type AdminProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminProfile.
     */
    data: XOR<AdminProfileCreateInput, AdminProfileUncheckedCreateInput>
  }

  /**
   * AdminProfile createMany
   */
  export type AdminProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminProfiles.
     */
    data: AdminProfileCreateManyInput | AdminProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminProfile createManyAndReturn
   */
  export type AdminProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * The data used to create many AdminProfiles.
     */
    data: AdminProfileCreateManyInput | AdminProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminProfile update
   */
  export type AdminProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminProfile.
     */
    data: XOR<AdminProfileUpdateInput, AdminProfileUncheckedUpdateInput>
    /**
     * Choose, which AdminProfile to update.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile updateMany
   */
  export type AdminProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminProfiles.
     */
    data: XOR<AdminProfileUpdateManyMutationInput, AdminProfileUncheckedUpdateManyInput>
    /**
     * Filter which AdminProfiles to update
     */
    where?: AdminProfileWhereInput
    /**
     * Limit how many AdminProfiles to update.
     */
    limit?: number
  }

  /**
   * AdminProfile updateManyAndReturn
   */
  export type AdminProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * The data used to update AdminProfiles.
     */
    data: XOR<AdminProfileUpdateManyMutationInput, AdminProfileUncheckedUpdateManyInput>
    /**
     * Filter which AdminProfiles to update
     */
    where?: AdminProfileWhereInput
    /**
     * Limit how many AdminProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminProfile upsert
   */
  export type AdminProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminProfile to update in case it exists.
     */
    where: AdminProfileWhereUniqueInput
    /**
     * In case the AdminProfile found by the `where` argument doesn't exist, create a new AdminProfile with this data.
     */
    create: XOR<AdminProfileCreateInput, AdminProfileUncheckedCreateInput>
    /**
     * In case the AdminProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminProfileUpdateInput, AdminProfileUncheckedUpdateInput>
  }

  /**
   * AdminProfile delete
   */
  export type AdminProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter which AdminProfile to delete.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile deleteMany
   */
  export type AdminProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProfiles to delete
     */
    where?: AdminProfileWhereInput
    /**
     * Limit how many AdminProfiles to delete.
     */
    limit?: number
  }

  /**
   * AdminProfile.audit_logs
   */
  export type AdminProfile$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AdminProfile without action
   */
  export type AdminProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
  }


  /**
   * Model ClientProfile
   */

  export type AggregateClientProfile = {
    _count: ClientProfileCountAggregateOutputType | null
    _min: ClientProfileMinAggregateOutputType | null
    _max: ClientProfileMaxAggregateOutputType | null
  }

  export type ClientProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type ClientProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type ClientProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    _all: number
  }


  export type ClientProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type ClientProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type ClientProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type ClientProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProfile to aggregate.
     */
    where?: ClientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProfiles to fetch.
     */
    orderBy?: ClientProfileOrderByWithRelationInput | ClientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientProfiles
    **/
    _count?: true | ClientProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientProfileMaxAggregateInputType
  }

  export type GetClientProfileAggregateType<T extends ClientProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateClientProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientProfile[P]>
      : GetScalarType<T[P], AggregateClientProfile[P]>
  }




  export type ClientProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientProfileWhereInput
    orderBy?: ClientProfileOrderByWithAggregationInput | ClientProfileOrderByWithAggregationInput[]
    by: ClientProfileScalarFieldEnum[] | ClientProfileScalarFieldEnum
    having?: ClientProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientProfileCountAggregateInputType | true
    _min?: ClientProfileMinAggregateInputType
    _max?: ClientProfileMaxAggregateInputType
  }

  export type ClientProfileGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    _count: ClientProfileCountAggregateOutputType | null
    _min: ClientProfileMinAggregateOutputType | null
    _max: ClientProfileMaxAggregateOutputType | null
  }

  type GetClientProfileGroupByPayload<T extends ClientProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ClientProfileGroupByOutputType[P]>
        }
      >
    >


  export type ClientProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | ClientProfile$ordersArgs<ExtArgs>
    ratings?: boolean | ClientProfile$ratingsArgs<ExtArgs>
    _count?: boolean | ClientProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProfile"]>

  export type ClientProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProfile"]>

  export type ClientProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProfile"]>

  export type ClientProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
  }

  export type ClientProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name", ExtArgs["result"]["clientProfile"]>
  export type ClientProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | ClientProfile$ordersArgs<ExtArgs>
    ratings?: boolean | ClientProfile$ratingsArgs<ExtArgs>
    _count?: boolean | ClientProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
    }, ExtArgs["result"]["clientProfile"]>
    composites: {}
  }

  type ClientProfileGetPayload<S extends boolean | null | undefined | ClientProfileDefaultArgs> = $Result.GetResult<Prisma.$ClientProfilePayload, S>

  type ClientProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientProfileCountAggregateInputType | true
    }

  export interface ClientProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientProfile'], meta: { name: 'ClientProfile' } }
    /**
     * Find zero or one ClientProfile that matches the filter.
     * @param {ClientProfileFindUniqueArgs} args - Arguments to find a ClientProfile
     * @example
     * // Get one ClientProfile
     * const clientProfile = await prisma.clientProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientProfileFindUniqueArgs>(args: SelectSubset<T, ClientProfileFindUniqueArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientProfileFindUniqueOrThrowArgs} args - Arguments to find a ClientProfile
     * @example
     * // Get one ClientProfile
     * const clientProfile = await prisma.clientProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileFindFirstArgs} args - Arguments to find a ClientProfile
     * @example
     * // Get one ClientProfile
     * const clientProfile = await prisma.clientProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientProfileFindFirstArgs>(args?: SelectSubset<T, ClientProfileFindFirstArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileFindFirstOrThrowArgs} args - Arguments to find a ClientProfile
     * @example
     * // Get one ClientProfile
     * const clientProfile = await prisma.clientProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientProfiles
     * const clientProfiles = await prisma.clientProfile.findMany()
     * 
     * // Get first 10 ClientProfiles
     * const clientProfiles = await prisma.clientProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientProfileWithIdOnly = await prisma.clientProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientProfileFindManyArgs>(args?: SelectSubset<T, ClientProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientProfile.
     * @param {ClientProfileCreateArgs} args - Arguments to create a ClientProfile.
     * @example
     * // Create one ClientProfile
     * const ClientProfile = await prisma.clientProfile.create({
     *   data: {
     *     // ... data to create a ClientProfile
     *   }
     * })
     * 
     */
    create<T extends ClientProfileCreateArgs>(args: SelectSubset<T, ClientProfileCreateArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientProfiles.
     * @param {ClientProfileCreateManyArgs} args - Arguments to create many ClientProfiles.
     * @example
     * // Create many ClientProfiles
     * const clientProfile = await prisma.clientProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientProfileCreateManyArgs>(args?: SelectSubset<T, ClientProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientProfiles and returns the data saved in the database.
     * @param {ClientProfileCreateManyAndReturnArgs} args - Arguments to create many ClientProfiles.
     * @example
     * // Create many ClientProfiles
     * const clientProfile = await prisma.clientProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientProfiles and only return the `id`
     * const clientProfileWithIdOnly = await prisma.clientProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientProfile.
     * @param {ClientProfileDeleteArgs} args - Arguments to delete one ClientProfile.
     * @example
     * // Delete one ClientProfile
     * const ClientProfile = await prisma.clientProfile.delete({
     *   where: {
     *     // ... filter to delete one ClientProfile
     *   }
     * })
     * 
     */
    delete<T extends ClientProfileDeleteArgs>(args: SelectSubset<T, ClientProfileDeleteArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientProfile.
     * @param {ClientProfileUpdateArgs} args - Arguments to update one ClientProfile.
     * @example
     * // Update one ClientProfile
     * const clientProfile = await prisma.clientProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientProfileUpdateArgs>(args: SelectSubset<T, ClientProfileUpdateArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientProfiles.
     * @param {ClientProfileDeleteManyArgs} args - Arguments to filter ClientProfiles to delete.
     * @example
     * // Delete a few ClientProfiles
     * const { count } = await prisma.clientProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientProfileDeleteManyArgs>(args?: SelectSubset<T, ClientProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientProfiles
     * const clientProfile = await prisma.clientProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientProfileUpdateManyArgs>(args: SelectSubset<T, ClientProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientProfiles and returns the data updated in the database.
     * @param {ClientProfileUpdateManyAndReturnArgs} args - Arguments to update many ClientProfiles.
     * @example
     * // Update many ClientProfiles
     * const clientProfile = await prisma.clientProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientProfiles and only return the `id`
     * const clientProfileWithIdOnly = await prisma.clientProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientProfile.
     * @param {ClientProfileUpsertArgs} args - Arguments to update or create a ClientProfile.
     * @example
     * // Update or create a ClientProfile
     * const clientProfile = await prisma.clientProfile.upsert({
     *   create: {
     *     // ... data to create a ClientProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientProfile we want to update
     *   }
     * })
     */
    upsert<T extends ClientProfileUpsertArgs>(args: SelectSubset<T, ClientProfileUpsertArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileCountArgs} args - Arguments to filter ClientProfiles to count.
     * @example
     * // Count the number of ClientProfiles
     * const count = await prisma.clientProfile.count({
     *   where: {
     *     // ... the filter for the ClientProfiles we want to count
     *   }
     * })
    **/
    count<T extends ClientProfileCountArgs>(
      args?: Subset<T, ClientProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientProfileAggregateArgs>(args: Subset<T, ClientProfileAggregateArgs>): Prisma.PrismaPromise<GetClientProfileAggregateType<T>>

    /**
     * Group by ClientProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileGroupByArgs} args - Group by arguments.
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
      T extends ClientProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientProfileGroupByArgs['orderBy'] }
        : { orderBy?: ClientProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientProfile model
   */
  readonly fields: ClientProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends ClientProfile$ordersArgs<ExtArgs> = {}>(args?: Subset<T, ClientProfile$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends ClientProfile$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, ClientProfile$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClientProfile model
   */
  interface ClientProfileFieldRefs {
    readonly id: FieldRef<"ClientProfile", 'String'>
    readonly userId: FieldRef<"ClientProfile", 'String'>
    readonly name: FieldRef<"ClientProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClientProfile findUnique
   */
  export type ClientProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfile to fetch.
     */
    where: ClientProfileWhereUniqueInput
  }

  /**
   * ClientProfile findUniqueOrThrow
   */
  export type ClientProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfile to fetch.
     */
    where: ClientProfileWhereUniqueInput
  }

  /**
   * ClientProfile findFirst
   */
  export type ClientProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfile to fetch.
     */
    where?: ClientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProfiles to fetch.
     */
    orderBy?: ClientProfileOrderByWithRelationInput | ClientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProfiles.
     */
    cursor?: ClientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProfiles.
     */
    distinct?: ClientProfileScalarFieldEnum | ClientProfileScalarFieldEnum[]
  }

  /**
   * ClientProfile findFirstOrThrow
   */
  export type ClientProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfile to fetch.
     */
    where?: ClientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProfiles to fetch.
     */
    orderBy?: ClientProfileOrderByWithRelationInput | ClientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProfiles.
     */
    cursor?: ClientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProfiles.
     */
    distinct?: ClientProfileScalarFieldEnum | ClientProfileScalarFieldEnum[]
  }

  /**
   * ClientProfile findMany
   */
  export type ClientProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfiles to fetch.
     */
    where?: ClientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProfiles to fetch.
     */
    orderBy?: ClientProfileOrderByWithRelationInput | ClientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientProfiles.
     */
    cursor?: ClientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProfiles.
     */
    skip?: number
    distinct?: ClientProfileScalarFieldEnum | ClientProfileScalarFieldEnum[]
  }

  /**
   * ClientProfile create
   */
  export type ClientProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientProfile.
     */
    data: XOR<ClientProfileCreateInput, ClientProfileUncheckedCreateInput>
  }

  /**
   * ClientProfile createMany
   */
  export type ClientProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientProfiles.
     */
    data: ClientProfileCreateManyInput | ClientProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientProfile createManyAndReturn
   */
  export type ClientProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ClientProfiles.
     */
    data: ClientProfileCreateManyInput | ClientProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientProfile update
   */
  export type ClientProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientProfile.
     */
    data: XOR<ClientProfileUpdateInput, ClientProfileUncheckedUpdateInput>
    /**
     * Choose, which ClientProfile to update.
     */
    where: ClientProfileWhereUniqueInput
  }

  /**
   * ClientProfile updateMany
   */
  export type ClientProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientProfiles.
     */
    data: XOR<ClientProfileUpdateManyMutationInput, ClientProfileUncheckedUpdateManyInput>
    /**
     * Filter which ClientProfiles to update
     */
    where?: ClientProfileWhereInput
    /**
     * Limit how many ClientProfiles to update.
     */
    limit?: number
  }

  /**
   * ClientProfile updateManyAndReturn
   */
  export type ClientProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * The data used to update ClientProfiles.
     */
    data: XOR<ClientProfileUpdateManyMutationInput, ClientProfileUncheckedUpdateManyInput>
    /**
     * Filter which ClientProfiles to update
     */
    where?: ClientProfileWhereInput
    /**
     * Limit how many ClientProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientProfile upsert
   */
  export type ClientProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientProfile to update in case it exists.
     */
    where: ClientProfileWhereUniqueInput
    /**
     * In case the ClientProfile found by the `where` argument doesn't exist, create a new ClientProfile with this data.
     */
    create: XOR<ClientProfileCreateInput, ClientProfileUncheckedCreateInput>
    /**
     * In case the ClientProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientProfileUpdateInput, ClientProfileUncheckedUpdateInput>
  }

  /**
   * ClientProfile delete
   */
  export type ClientProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter which ClientProfile to delete.
     */
    where: ClientProfileWhereUniqueInput
  }

  /**
   * ClientProfile deleteMany
   */
  export type ClientProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProfiles to delete
     */
    where?: ClientProfileWhereInput
    /**
     * Limit how many ClientProfiles to delete.
     */
    limit?: number
  }

  /**
   * ClientProfile.orders
   */
  export type ClientProfile$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * ClientProfile.ratings
   */
  export type ClientProfile$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * ClientProfile without action
   */
  export type ClientProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    year: number | null
  }

  export type CarSumAggregateOutputType = {
    year: number | null
  }

  export type CarMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    vehicle_type_id: string | null
    brand: string | null
    model: string | null
    year: number | null
    color: string | null
    license_plate: string | null
    verification_status: $Enums.VehicleVerificationStatus | null
  }

  export type CarMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    vehicle_type_id: string | null
    brand: string | null
    model: string | null
    year: number | null
    color: string | null
    license_plate: string | null
    verification_status: $Enums.VehicleVerificationStatus | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    driverId: number
    vehicle_type_id: number
    brand: number
    model: number
    year: number
    color: number
    license_plate: number
    verification_status: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    year?: true
  }

  export type CarSumAggregateInputType = {
    year?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    driverId?: true
    vehicle_type_id?: true
    brand?: true
    model?: true
    year?: true
    color?: true
    license_plate?: true
    verification_status?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    driverId?: true
    vehicle_type_id?: true
    brand?: true
    model?: true
    year?: true
    color?: true
    license_plate?: true
    verification_status?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    driverId?: true
    vehicle_type_id?: true
    brand?: true
    model?: true
    year?: true
    color?: true
    license_plate?: true
    verification_status?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: string
    driverId: string
    vehicle_type_id: string
    brand: string
    model: string
    year: number
    color: string | null
    license_plate: string
    verification_status: $Enums.VehicleVerificationStatus
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    vehicle_type_id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    license_plate?: boolean
    verification_status?: boolean
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    vehicle_type?: boolean | VehicleTypeDefaultArgs<ExtArgs>
    orders?: boolean | Car$ordersArgs<ExtArgs>
    media?: boolean | Car$mediaArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    vehicle_type_id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    license_plate?: boolean
    verification_status?: boolean
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    vehicle_type?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    vehicle_type_id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    license_plate?: boolean
    verification_status?: boolean
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    vehicle_type?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    driverId?: boolean
    vehicle_type_id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    license_plate?: boolean
    verification_status?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "vehicle_type_id" | "brand" | "model" | "year" | "color" | "license_plate" | "verification_status", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    vehicle_type?: boolean | VehicleTypeDefaultArgs<ExtArgs>
    orders?: boolean | Car$ordersArgs<ExtArgs>
    media?: boolean | Car$mediaArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    vehicle_type?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    vehicle_type?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      driver: Prisma.$DriverProfilePayload<ExtArgs>
      vehicle_type: Prisma.$VehicleTypePayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
      media: Prisma.$VehicleMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      vehicle_type_id: string
      brand: string
      model: string
      year: number
      color: string | null
      license_plate: string
      verification_status: $Enums.VehicleVerificationStatus
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfileDefaultArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle_type<T extends VehicleTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleTypeDefaultArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends Car$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Car$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends Car$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Car$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'String'>
    readonly driverId: FieldRef<"Car", 'String'>
    readonly vehicle_type_id: FieldRef<"Car", 'String'>
    readonly brand: FieldRef<"Car", 'String'>
    readonly model: FieldRef<"Car", 'String'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly color: FieldRef<"Car", 'String'>
    readonly license_plate: FieldRef<"Car", 'String'>
    readonly verification_status: FieldRef<"Car", 'VehicleVerificationStatus'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.orders
   */
  export type Car$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Car.media
   */
  export type Car$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    where?: VehicleMediaWhereInput
    orderBy?: VehicleMediaOrderByWithRelationInput | VehicleMediaOrderByWithRelationInput[]
    cursor?: VehicleMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleMediaScalarFieldEnum | VehicleMediaScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model VehicleMedia
   */

  export type AggregateVehicleMedia = {
    _count: VehicleMediaCountAggregateOutputType | null
    _min: VehicleMediaMinAggregateOutputType | null
    _max: VehicleMediaMaxAggregateOutputType | null
  }

  export type VehicleMediaMinAggregateOutputType = {
    id: string | null
    carId: string | null
    url: string | null
    type: $Enums.MediaType | null
    createdAt: Date | null
  }

  export type VehicleMediaMaxAggregateOutputType = {
    id: string | null
    carId: string | null
    url: string | null
    type: $Enums.MediaType | null
    createdAt: Date | null
  }

  export type VehicleMediaCountAggregateOutputType = {
    id: number
    carId: number
    url: number
    type: number
    createdAt: number
    _all: number
  }


  export type VehicleMediaMinAggregateInputType = {
    id?: true
    carId?: true
    url?: true
    type?: true
    createdAt?: true
  }

  export type VehicleMediaMaxAggregateInputType = {
    id?: true
    carId?: true
    url?: true
    type?: true
    createdAt?: true
  }

  export type VehicleMediaCountAggregateInputType = {
    id?: true
    carId?: true
    url?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type VehicleMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleMedia to aggregate.
     */
    where?: VehicleMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleMedias to fetch.
     */
    orderBy?: VehicleMediaOrderByWithRelationInput | VehicleMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleMedias
    **/
    _count?: true | VehicleMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMediaMaxAggregateInputType
  }

  export type GetVehicleMediaAggregateType<T extends VehicleMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleMedia[P]>
      : GetScalarType<T[P], AggregateVehicleMedia[P]>
  }




  export type VehicleMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleMediaWhereInput
    orderBy?: VehicleMediaOrderByWithAggregationInput | VehicleMediaOrderByWithAggregationInput[]
    by: VehicleMediaScalarFieldEnum[] | VehicleMediaScalarFieldEnum
    having?: VehicleMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleMediaCountAggregateInputType | true
    _min?: VehicleMediaMinAggregateInputType
    _max?: VehicleMediaMaxAggregateInputType
  }

  export type VehicleMediaGroupByOutputType = {
    id: string
    carId: string
    url: string
    type: $Enums.MediaType
    createdAt: Date
    _count: VehicleMediaCountAggregateOutputType | null
    _min: VehicleMediaMinAggregateOutputType | null
    _max: VehicleMediaMaxAggregateOutputType | null
  }

  type GetVehicleMediaGroupByPayload<T extends VehicleMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleMediaGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleMediaGroupByOutputType[P]>
        }
      >
    >


  export type VehicleMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleMedia"]>

  export type VehicleMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleMedia"]>

  export type VehicleMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleMedia"]>

  export type VehicleMediaSelectScalar = {
    id?: boolean
    carId?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type VehicleMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "url" | "type" | "createdAt", ExtArgs["result"]["vehicleMedia"]>
  export type VehicleMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type VehicleMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type VehicleMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $VehicleMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleMedia"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      carId: string
      url: string
      type: $Enums.MediaType
      createdAt: Date
    }, ExtArgs["result"]["vehicleMedia"]>
    composites: {}
  }

  type VehicleMediaGetPayload<S extends boolean | null | undefined | VehicleMediaDefaultArgs> = $Result.GetResult<Prisma.$VehicleMediaPayload, S>

  type VehicleMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleMediaCountAggregateInputType | true
    }

  export interface VehicleMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleMedia'], meta: { name: 'VehicleMedia' } }
    /**
     * Find zero or one VehicleMedia that matches the filter.
     * @param {VehicleMediaFindUniqueArgs} args - Arguments to find a VehicleMedia
     * @example
     * // Get one VehicleMedia
     * const vehicleMedia = await prisma.vehicleMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleMediaFindUniqueArgs>(args: SelectSubset<T, VehicleMediaFindUniqueArgs<ExtArgs>>): Prisma__VehicleMediaClient<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleMediaFindUniqueOrThrowArgs} args - Arguments to find a VehicleMedia
     * @example
     * // Get one VehicleMedia
     * const vehicleMedia = await prisma.vehicleMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleMediaClient<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMediaFindFirstArgs} args - Arguments to find a VehicleMedia
     * @example
     * // Get one VehicleMedia
     * const vehicleMedia = await prisma.vehicleMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleMediaFindFirstArgs>(args?: SelectSubset<T, VehicleMediaFindFirstArgs<ExtArgs>>): Prisma__VehicleMediaClient<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMediaFindFirstOrThrowArgs} args - Arguments to find a VehicleMedia
     * @example
     * // Get one VehicleMedia
     * const vehicleMedia = await prisma.vehicleMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleMediaClient<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleMedias
     * const vehicleMedias = await prisma.vehicleMedia.findMany()
     * 
     * // Get first 10 VehicleMedias
     * const vehicleMedias = await prisma.vehicleMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleMediaWithIdOnly = await prisma.vehicleMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleMediaFindManyArgs>(args?: SelectSubset<T, VehicleMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleMedia.
     * @param {VehicleMediaCreateArgs} args - Arguments to create a VehicleMedia.
     * @example
     * // Create one VehicleMedia
     * const VehicleMedia = await prisma.vehicleMedia.create({
     *   data: {
     *     // ... data to create a VehicleMedia
     *   }
     * })
     * 
     */
    create<T extends VehicleMediaCreateArgs>(args: SelectSubset<T, VehicleMediaCreateArgs<ExtArgs>>): Prisma__VehicleMediaClient<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleMedias.
     * @param {VehicleMediaCreateManyArgs} args - Arguments to create many VehicleMedias.
     * @example
     * // Create many VehicleMedias
     * const vehicleMedia = await prisma.vehicleMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleMediaCreateManyArgs>(args?: SelectSubset<T, VehicleMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleMedias and returns the data saved in the database.
     * @param {VehicleMediaCreateManyAndReturnArgs} args - Arguments to create many VehicleMedias.
     * @example
     * // Create many VehicleMedias
     * const vehicleMedia = await prisma.vehicleMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleMedias and only return the `id`
     * const vehicleMediaWithIdOnly = await prisma.vehicleMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleMedia.
     * @param {VehicleMediaDeleteArgs} args - Arguments to delete one VehicleMedia.
     * @example
     * // Delete one VehicleMedia
     * const VehicleMedia = await prisma.vehicleMedia.delete({
     *   where: {
     *     // ... filter to delete one VehicleMedia
     *   }
     * })
     * 
     */
    delete<T extends VehicleMediaDeleteArgs>(args: SelectSubset<T, VehicleMediaDeleteArgs<ExtArgs>>): Prisma__VehicleMediaClient<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleMedia.
     * @param {VehicleMediaUpdateArgs} args - Arguments to update one VehicleMedia.
     * @example
     * // Update one VehicleMedia
     * const vehicleMedia = await prisma.vehicleMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleMediaUpdateArgs>(args: SelectSubset<T, VehicleMediaUpdateArgs<ExtArgs>>): Prisma__VehicleMediaClient<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleMedias.
     * @param {VehicleMediaDeleteManyArgs} args - Arguments to filter VehicleMedias to delete.
     * @example
     * // Delete a few VehicleMedias
     * const { count } = await prisma.vehicleMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleMediaDeleteManyArgs>(args?: SelectSubset<T, VehicleMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleMedias
     * const vehicleMedia = await prisma.vehicleMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleMediaUpdateManyArgs>(args: SelectSubset<T, VehicleMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleMedias and returns the data updated in the database.
     * @param {VehicleMediaUpdateManyAndReturnArgs} args - Arguments to update many VehicleMedias.
     * @example
     * // Update many VehicleMedias
     * const vehicleMedia = await prisma.vehicleMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleMedias and only return the `id`
     * const vehicleMediaWithIdOnly = await prisma.vehicleMedia.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleMedia.
     * @param {VehicleMediaUpsertArgs} args - Arguments to update or create a VehicleMedia.
     * @example
     * // Update or create a VehicleMedia
     * const vehicleMedia = await prisma.vehicleMedia.upsert({
     *   create: {
     *     // ... data to create a VehicleMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleMedia we want to update
     *   }
     * })
     */
    upsert<T extends VehicleMediaUpsertArgs>(args: SelectSubset<T, VehicleMediaUpsertArgs<ExtArgs>>): Prisma__VehicleMediaClient<$Result.GetResult<Prisma.$VehicleMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMediaCountArgs} args - Arguments to filter VehicleMedias to count.
     * @example
     * // Count the number of VehicleMedias
     * const count = await prisma.vehicleMedia.count({
     *   where: {
     *     // ... the filter for the VehicleMedias we want to count
     *   }
     * })
    **/
    count<T extends VehicleMediaCountArgs>(
      args?: Subset<T, VehicleMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleMediaAggregateArgs>(args: Subset<T, VehicleMediaAggregateArgs>): Prisma.PrismaPromise<GetVehicleMediaAggregateType<T>>

    /**
     * Group by VehicleMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMediaGroupByArgs} args - Group by arguments.
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
      T extends VehicleMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleMediaGroupByArgs['orderBy'] }
        : { orderBy?: VehicleMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleMedia model
   */
  readonly fields: VehicleMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VehicleMedia model
   */
  interface VehicleMediaFieldRefs {
    readonly id: FieldRef<"VehicleMedia", 'String'>
    readonly carId: FieldRef<"VehicleMedia", 'String'>
    readonly url: FieldRef<"VehicleMedia", 'String'>
    readonly type: FieldRef<"VehicleMedia", 'MediaType'>
    readonly createdAt: FieldRef<"VehicleMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleMedia findUnique
   */
  export type VehicleMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    /**
     * Filter, which VehicleMedia to fetch.
     */
    where: VehicleMediaWhereUniqueInput
  }

  /**
   * VehicleMedia findUniqueOrThrow
   */
  export type VehicleMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    /**
     * Filter, which VehicleMedia to fetch.
     */
    where: VehicleMediaWhereUniqueInput
  }

  /**
   * VehicleMedia findFirst
   */
  export type VehicleMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    /**
     * Filter, which VehicleMedia to fetch.
     */
    where?: VehicleMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleMedias to fetch.
     */
    orderBy?: VehicleMediaOrderByWithRelationInput | VehicleMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleMedias.
     */
    cursor?: VehicleMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleMedias.
     */
    distinct?: VehicleMediaScalarFieldEnum | VehicleMediaScalarFieldEnum[]
  }

  /**
   * VehicleMedia findFirstOrThrow
   */
  export type VehicleMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    /**
     * Filter, which VehicleMedia to fetch.
     */
    where?: VehicleMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleMedias to fetch.
     */
    orderBy?: VehicleMediaOrderByWithRelationInput | VehicleMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleMedias.
     */
    cursor?: VehicleMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleMedias.
     */
    distinct?: VehicleMediaScalarFieldEnum | VehicleMediaScalarFieldEnum[]
  }

  /**
   * VehicleMedia findMany
   */
  export type VehicleMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    /**
     * Filter, which VehicleMedias to fetch.
     */
    where?: VehicleMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleMedias to fetch.
     */
    orderBy?: VehicleMediaOrderByWithRelationInput | VehicleMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleMedias.
     */
    cursor?: VehicleMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleMedias.
     */
    skip?: number
    distinct?: VehicleMediaScalarFieldEnum | VehicleMediaScalarFieldEnum[]
  }

  /**
   * VehicleMedia create
   */
  export type VehicleMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleMedia.
     */
    data: XOR<VehicleMediaCreateInput, VehicleMediaUncheckedCreateInput>
  }

  /**
   * VehicleMedia createMany
   */
  export type VehicleMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleMedias.
     */
    data: VehicleMediaCreateManyInput | VehicleMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleMedia createManyAndReturn
   */
  export type VehicleMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleMedias.
     */
    data: VehicleMediaCreateManyInput | VehicleMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleMedia update
   */
  export type VehicleMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleMedia.
     */
    data: XOR<VehicleMediaUpdateInput, VehicleMediaUncheckedUpdateInput>
    /**
     * Choose, which VehicleMedia to update.
     */
    where: VehicleMediaWhereUniqueInput
  }

  /**
   * VehicleMedia updateMany
   */
  export type VehicleMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleMedias.
     */
    data: XOR<VehicleMediaUpdateManyMutationInput, VehicleMediaUncheckedUpdateManyInput>
    /**
     * Filter which VehicleMedias to update
     */
    where?: VehicleMediaWhereInput
    /**
     * Limit how many VehicleMedias to update.
     */
    limit?: number
  }

  /**
   * VehicleMedia updateManyAndReturn
   */
  export type VehicleMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * The data used to update VehicleMedias.
     */
    data: XOR<VehicleMediaUpdateManyMutationInput, VehicleMediaUncheckedUpdateManyInput>
    /**
     * Filter which VehicleMedias to update
     */
    where?: VehicleMediaWhereInput
    /**
     * Limit how many VehicleMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleMedia upsert
   */
  export type VehicleMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleMedia to update in case it exists.
     */
    where: VehicleMediaWhereUniqueInput
    /**
     * In case the VehicleMedia found by the `where` argument doesn't exist, create a new VehicleMedia with this data.
     */
    create: XOR<VehicleMediaCreateInput, VehicleMediaUncheckedCreateInput>
    /**
     * In case the VehicleMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleMediaUpdateInput, VehicleMediaUncheckedUpdateInput>
  }

  /**
   * VehicleMedia delete
   */
  export type VehicleMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
    /**
     * Filter which VehicleMedia to delete.
     */
    where: VehicleMediaWhereUniqueInput
  }

  /**
   * VehicleMedia deleteMany
   */
  export type VehicleMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleMedias to delete
     */
    where?: VehicleMediaWhereInput
    /**
     * Limit how many VehicleMedias to delete.
     */
    limit?: number
  }

  /**
   * VehicleMedia without action
   */
  export type VehicleMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleMedia
     */
    select?: VehicleMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleMedia
     */
    omit?: VehicleMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleMediaInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    distance: number | null
    price: Decimal | null
    passenger_count: number | null
  }

  export type OrderSumAggregateOutputType = {
    distance: number | null
    price: Decimal | null
    passenger_count: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    regionId: string | null
    driverId: string | null
    car_id: string | null
    name: string | null
    from_address: string | null
    to_address: string | null
    distance: number | null
    price: Decimal | null
    currency: string | null
    status: $Enums.OrderStatus | null
    trip_datetime: Date | null
    notes: string | null
    passenger_count: number | null
    flight_number: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    regionId: string | null
    driverId: string | null
    car_id: string | null
    name: string | null
    from_address: string | null
    to_address: string | null
    distance: number | null
    price: Decimal | null
    currency: string | null
    status: $Enums.OrderStatus | null
    trip_datetime: Date | null
    notes: string | null
    passenger_count: number | null
    flight_number: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    clientId: number
    regionId: number
    driverId: number
    car_id: number
    name: number
    from_address: number
    to_address: number
    distance: number
    price: number
    currency: number
    status: number
    trip_datetime: number
    notes: number
    passenger_count: number
    flight_number: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    distance?: true
    price?: true
    passenger_count?: true
  }

  export type OrderSumAggregateInputType = {
    distance?: true
    price?: true
    passenger_count?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    clientId?: true
    regionId?: true
    driverId?: true
    car_id?: true
    name?: true
    from_address?: true
    to_address?: true
    distance?: true
    price?: true
    currency?: true
    status?: true
    trip_datetime?: true
    notes?: true
    passenger_count?: true
    flight_number?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    clientId?: true
    regionId?: true
    driverId?: true
    car_id?: true
    name?: true
    from_address?: true
    to_address?: true
    distance?: true
    price?: true
    currency?: true
    status?: true
    trip_datetime?: true
    notes?: true
    passenger_count?: true
    flight_number?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    clientId?: true
    regionId?: true
    driverId?: true
    car_id?: true
    name?: true
    from_address?: true
    to_address?: true
    distance?: true
    price?: true
    currency?: true
    status?: true
    trip_datetime?: true
    notes?: true
    passenger_count?: true
    flight_number?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    clientId: string | null
    regionId: string | null
    driverId: string | null
    car_id: string | null
    name: string | null
    from_address: string
    to_address: string
    distance: number | null
    price: Decimal
    currency: string
    status: $Enums.OrderStatus
    trip_datetime: Date
    notes: string | null
    passenger_count: number
    flight_number: string | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    regionId?: boolean
    driverId?: boolean
    car_id?: boolean
    name?: boolean
    from_address?: boolean
    to_address?: boolean
    distance?: boolean
    price?: boolean
    currency?: boolean
    status?: boolean
    trip_datetime?: boolean
    notes?: boolean
    passenger_count?: boolean
    flight_number?: boolean
    client?: boolean | Order$clientArgs<ExtArgs>
    region?: boolean | Order$regionArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
    car?: boolean | Order$carArgs<ExtArgs>
    rating?: boolean | Order$ratingArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    regionId?: boolean
    driverId?: boolean
    car_id?: boolean
    name?: boolean
    from_address?: boolean
    to_address?: boolean
    distance?: boolean
    price?: boolean
    currency?: boolean
    status?: boolean
    trip_datetime?: boolean
    notes?: boolean
    passenger_count?: boolean
    flight_number?: boolean
    client?: boolean | Order$clientArgs<ExtArgs>
    region?: boolean | Order$regionArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
    car?: boolean | Order$carArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    regionId?: boolean
    driverId?: boolean
    car_id?: boolean
    name?: boolean
    from_address?: boolean
    to_address?: boolean
    distance?: boolean
    price?: boolean
    currency?: boolean
    status?: boolean
    trip_datetime?: boolean
    notes?: boolean
    passenger_count?: boolean
    flight_number?: boolean
    client?: boolean | Order$clientArgs<ExtArgs>
    region?: boolean | Order$regionArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
    car?: boolean | Order$carArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    clientId?: boolean
    regionId?: boolean
    driverId?: boolean
    car_id?: boolean
    name?: boolean
    from_address?: boolean
    to_address?: boolean
    distance?: boolean
    price?: boolean
    currency?: boolean
    status?: boolean
    trip_datetime?: boolean
    notes?: boolean
    passenger_count?: boolean
    flight_number?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "regionId" | "driverId" | "car_id" | "name" | "from_address" | "to_address" | "distance" | "price" | "currency" | "status" | "trip_datetime" | "notes" | "passenger_count" | "flight_number", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Order$clientArgs<ExtArgs>
    region?: boolean | Order$regionArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
    car?: boolean | Order$carArgs<ExtArgs>
    rating?: boolean | Order$ratingArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Order$clientArgs<ExtArgs>
    region?: boolean | Order$regionArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
    car?: boolean | Order$carArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Order$clientArgs<ExtArgs>
    region?: boolean | Order$regionArgs<ExtArgs>
    driver?: boolean | Order$driverArgs<ExtArgs>
    car?: boolean | Order$carArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      client: Prisma.$ClientProfilePayload<ExtArgs> | null
      region: Prisma.$RegionPayload<ExtArgs> | null
      driver: Prisma.$DriverProfilePayload<ExtArgs> | null
      car: Prisma.$CarPayload<ExtArgs> | null
      rating: Prisma.$RatingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string | null
      regionId: string | null
      driverId: string | null
      car_id: string | null
      name: string | null
      from_address: string
      to_address: string
      distance: number | null
      price: Prisma.Decimal
      currency: string
      status: $Enums.OrderStatus
      trip_datetime: Date
      notes: string | null
      passenger_count: number
      flight_number: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Order$clientArgs<ExtArgs> = {}>(args?: Subset<T, Order$clientArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    region<T extends Order$regionArgs<ExtArgs> = {}>(args?: Subset<T, Order$regionArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    driver<T extends Order$driverArgs<ExtArgs> = {}>(args?: Subset<T, Order$driverArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    car<T extends Order$carArgs<ExtArgs> = {}>(args?: Subset<T, Order$carArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rating<T extends Order$ratingArgs<ExtArgs> = {}>(args?: Subset<T, Order$ratingArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly clientId: FieldRef<"Order", 'String'>
    readonly regionId: FieldRef<"Order", 'String'>
    readonly driverId: FieldRef<"Order", 'String'>
    readonly car_id: FieldRef<"Order", 'String'>
    readonly name: FieldRef<"Order", 'String'>
    readonly from_address: FieldRef<"Order", 'String'>
    readonly to_address: FieldRef<"Order", 'String'>
    readonly distance: FieldRef<"Order", 'Float'>
    readonly price: FieldRef<"Order", 'Decimal'>
    readonly currency: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly trip_datetime: FieldRef<"Order", 'DateTime'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly passenger_count: FieldRef<"Order", 'Int'>
    readonly flight_number: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.client
   */
  export type Order$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    where?: ClientProfileWhereInput
  }

  /**
   * Order.region
   */
  export type Order$regionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
  }

  /**
   * Order.driver
   */
  export type Order$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    where?: DriverProfileWhereInput
  }

  /**
   * Order.car
   */
  export type Order$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
  }

  /**
   * Order.rating
   */
  export type Order$ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    score: number | null
  }

  export type RatingSumAggregateOutputType = {
    score: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    driverId: string | null
    clientId: string | null
    score: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    driverId: string | null
    clientId: string | null
    score: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    order_id: number
    driverId: number
    clientId: number
    score: number
    comment: number
    createdAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    score?: true
  }

  export type RatingSumAggregateInputType = {
    score?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    order_id?: true
    driverId?: true
    clientId?: true
    score?: true
    comment?: true
    createdAt?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    order_id?: true
    driverId?: true
    clientId?: true
    score?: true
    comment?: true
    createdAt?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    order_id?: true
    driverId?: true
    clientId?: true
    score?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    order_id: string
    driverId: string
    clientId: string
    score: number
    comment: string | null
    createdAt: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    driverId?: boolean
    clientId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    driverId?: boolean
    clientId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    driverId?: boolean
    clientId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    order_id?: boolean
    driverId?: boolean
    clientId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "driverId" | "clientId" | "score" | "comment" | "createdAt", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      driver: Prisma.$DriverProfilePayload<ExtArgs>
      client: Prisma.$ClientProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      driverId: string
      clientId: string
      score: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
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
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfileDefaultArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientProfileDefaultArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly order_id: FieldRef<"Rating", 'String'>
    readonly driverId: FieldRef<"Rating", 'String'>
    readonly clientId: FieldRef<"Rating", 'String'>
    readonly score: FieldRef<"Rating", 'Int'>
    readonly comment: FieldRef<"Rating", 'String'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    type: $Enums.DocumentType | null
    file_url: string | null
    status: $Enums.DocumentStatus | null
    expires_at: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    type: $Enums.DocumentType | null
    file_url: string | null
    status: $Enums.DocumentStatus | null
    expires_at: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    driverId: number
    type: number
    file_url: number
    status: number
    expires_at: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    driverId?: true
    type?: true
    file_url?: true
    status?: true
    expires_at?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    driverId?: true
    type?: true
    file_url?: true
    status?: true
    expires_at?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    driverId?: true
    type?: true
    file_url?: true
    status?: true
    expires_at?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    driverId: string
    type: $Enums.DocumentType
    file_url: string
    status: $Enums.DocumentStatus
    expires_at: Date | null
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    type?: boolean
    file_url?: boolean
    status?: boolean
    expires_at?: boolean
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    type?: boolean
    file_url?: boolean
    status?: boolean
    expires_at?: boolean
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    type?: boolean
    file_url?: boolean
    status?: boolean
    expires_at?: boolean
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    driverId?: boolean
    type?: boolean
    file_url?: boolean
    status?: boolean
    expires_at?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "type" | "file_url" | "status" | "expires_at", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverProfileDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      driver: Prisma.$DriverProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      type: $Enums.DocumentType
      file_url: string
      status: $Enums.DocumentStatus
      expires_at: Date | null
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverProfileDefaultArgs<ExtArgs>>): Prisma__DriverProfileClient<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly driverId: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'DocumentType'>
    readonly file_url: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'DocumentStatus'>
    readonly expires_at: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    target_entity: string | null
    target_id: string | null
    created_at: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    target_entity: string | null
    target_id: string | null
    created_at: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    adminId: number
    action: number
    target_entity: number
    target_id: number
    created_at: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    target_entity?: true
    target_id?: true
    created_at?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    target_entity?: true
    target_id?: true
    created_at?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    target_entity?: true
    target_id?: true
    created_at?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    adminId: string
    action: string
    target_entity: string | null
    target_id: string | null
    created_at: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    target_entity?: boolean
    target_id?: boolean
    created_at?: boolean
    admin?: boolean | AdminProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    target_entity?: boolean
    target_id?: boolean
    created_at?: boolean
    admin?: boolean | AdminProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    target_entity?: boolean
    target_id?: boolean
    created_at?: boolean
    admin?: boolean | AdminProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    adminId?: boolean
    action?: boolean
    target_entity?: boolean
    target_id?: boolean
    created_at?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "action" | "target_entity" | "target_id" | "created_at", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminProfileDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminProfileDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminProfileDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      admin: Prisma.$AdminProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      action: string
      target_entity: string | null
      target_id: string | null
      created_at: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminProfileDefaultArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly adminId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly target_entity: FieldRef<"AuditLog", 'String'>
    readonly target_id: FieldRef<"AuditLog", 'String'>
    readonly created_at: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type RegionSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type RegionMinAggregateOutputType = {
    id: string | null
    parent_id: string | null
    name: string | null
    type: $Enums.RegionType | null
    latitude: number | null
    longitude: number | null
  }

  export type RegionMaxAggregateOutputType = {
    id: string | null
    parent_id: string | null
    name: string | null
    type: $Enums.RegionType | null
    latitude: number | null
    longitude: number | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    parent_id: number
    name: number
    type: number
    latitude: number
    longitude: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type RegionSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    parent_id?: true
    name?: true
    type?: true
    latitude?: true
    longitude?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    parent_id?: true
    name?: true
    type?: true
    latitude?: true
    longitude?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    parent_id?: true
    name?: true
    type?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: string
    parent_id: string | null
    name: string
    type: $Enums.RegionType
    latitude: number | null
    longitude: number | null
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    parent?: boolean | Region$parentArgs<ExtArgs>
    children?: boolean | Region$childrenArgs<ExtArgs>
    drivers?: boolean | Region$driversArgs<ExtArgs>
    translations?: boolean | Region$translationsArgs<ExtArgs>
    orders?: boolean | Region$ordersArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    parent?: boolean | Region$parentArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
    parent?: boolean | Region$parentArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    parent_id?: boolean
    name?: boolean
    type?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parent_id" | "name" | "type" | "latitude" | "longitude", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Region$parentArgs<ExtArgs>
    children?: boolean | Region$childrenArgs<ExtArgs>
    drivers?: boolean | Region$driversArgs<ExtArgs>
    translations?: boolean | Region$translationsArgs<ExtArgs>
    orders?: boolean | Region$ordersArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Region$parentArgs<ExtArgs>
  }
  export type RegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Region$parentArgs<ExtArgs>
  }

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      parent: Prisma.$RegionPayload<ExtArgs> | null
      children: Prisma.$RegionPayload<ExtArgs>[]
      drivers: Prisma.$DriverProfilePayload<ExtArgs>[]
      translations: Prisma.$RegionTranslationPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parent_id: string | null
      name: string
      type: $Enums.RegionType
      latitude: number | null
      longitude: number | null
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
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
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Region$parentArgs<ExtArgs> = {}>(args?: Subset<T, Region$parentArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Region$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Region$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drivers<T extends Region$driversArgs<ExtArgs> = {}>(args?: Subset<T, Region$driversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    translations<T extends Region$translationsArgs<ExtArgs> = {}>(args?: Subset<T, Region$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Region$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Region$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'String'>
    readonly parent_id: FieldRef<"Region", 'String'>
    readonly name: FieldRef<"Region", 'String'>
    readonly type: FieldRef<"Region", 'RegionType'>
    readonly latitude: FieldRef<"Region", 'Float'>
    readonly longitude: FieldRef<"Region", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.parent
   */
  export type Region$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
  }

  /**
   * Region.children
   */
  export type Region$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    cursor?: RegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region.drivers
   */
  export type Region$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverProfile
     */
    select?: DriverProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverProfile
     */
    omit?: DriverProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverProfileInclude<ExtArgs> | null
    where?: DriverProfileWhereInput
    orderBy?: DriverProfileOrderByWithRelationInput | DriverProfileOrderByWithRelationInput[]
    cursor?: DriverProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverProfileScalarFieldEnum | DriverProfileScalarFieldEnum[]
  }

  /**
   * Region.translations
   */
  export type Region$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    where?: RegionTranslationWhereInput
    orderBy?: RegionTranslationOrderByWithRelationInput | RegionTranslationOrderByWithRelationInput[]
    cursor?: RegionTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegionTranslationScalarFieldEnum | RegionTranslationScalarFieldEnum[]
  }

  /**
   * Region.orders
   */
  export type Region$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model VehicleType
   */

  export type AggregateVehicleType = {
    _count: VehicleTypeCountAggregateOutputType | null
    _avg: VehicleTypeAvgAggregateOutputType | null
    _sum: VehicleTypeSumAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  export type VehicleTypeAvgAggregateOutputType = {
    max_passengers: number | null
    max_luggage_standard: number | null
    max_luggage_small: number | null
  }

  export type VehicleTypeSumAggregateOutputType = {
    max_passengers: number | null
    max_luggage_standard: number | null
    max_luggage_small: number | null
  }

  export type VehicleTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    max_passengers: number | null
    max_luggage_standard: number | null
    max_luggage_small: number | null
  }

  export type VehicleTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    max_passengers: number | null
    max_luggage_standard: number | null
    max_luggage_small: number | null
  }

  export type VehicleTypeCountAggregateOutputType = {
    id: number
    name: number
    max_passengers: number
    max_luggage_standard: number
    max_luggage_small: number
    _all: number
  }


  export type VehicleTypeAvgAggregateInputType = {
    max_passengers?: true
    max_luggage_standard?: true
    max_luggage_small?: true
  }

  export type VehicleTypeSumAggregateInputType = {
    max_passengers?: true
    max_luggage_standard?: true
    max_luggage_small?: true
  }

  export type VehicleTypeMinAggregateInputType = {
    id?: true
    name?: true
    max_passengers?: true
    max_luggage_standard?: true
    max_luggage_small?: true
  }

  export type VehicleTypeMaxAggregateInputType = {
    id?: true
    name?: true
    max_passengers?: true
    max_luggage_standard?: true
    max_luggage_small?: true
  }

  export type VehicleTypeCountAggregateInputType = {
    id?: true
    name?: true
    max_passengers?: true
    max_luggage_standard?: true
    max_luggage_small?: true
    _all?: true
  }

  export type VehicleTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleType to aggregate.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleTypes
    **/
    _count?: true | VehicleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type GetVehicleTypeAggregateType<T extends VehicleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleType[P]>
      : GetScalarType<T[P], AggregateVehicleType[P]>
  }




  export type VehicleTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleTypeWhereInput
    orderBy?: VehicleTypeOrderByWithAggregationInput | VehicleTypeOrderByWithAggregationInput[]
    by: VehicleTypeScalarFieldEnum[] | VehicleTypeScalarFieldEnum
    having?: VehicleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleTypeCountAggregateInputType | true
    _avg?: VehicleTypeAvgAggregateInputType
    _sum?: VehicleTypeSumAggregateInputType
    _min?: VehicleTypeMinAggregateInputType
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type VehicleTypeGroupByOutputType = {
    id: string
    name: string
    max_passengers: number
    max_luggage_standard: number
    max_luggage_small: number
    _count: VehicleTypeCountAggregateOutputType | null
    _avg: VehicleTypeAvgAggregateOutputType | null
    _sum: VehicleTypeSumAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  type GetVehicleTypeGroupByPayload<T extends VehicleTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
        }
      >
    >


  export type VehicleTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    max_passengers?: boolean
    max_luggage_standard?: boolean
    max_luggage_small?: boolean
    cars?: boolean | VehicleType$carsArgs<ExtArgs>
    _count?: boolean | VehicleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    max_passengers?: boolean
    max_luggage_standard?: boolean
    max_luggage_small?: boolean
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    max_passengers?: boolean
    max_luggage_standard?: boolean
    max_luggage_small?: boolean
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectScalar = {
    id?: boolean
    name?: boolean
    max_passengers?: boolean
    max_luggage_standard?: boolean
    max_luggage_small?: boolean
  }

  export type VehicleTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "max_passengers" | "max_luggage_standard" | "max_luggage_small", ExtArgs["result"]["vehicleType"]>
  export type VehicleTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | VehicleType$carsArgs<ExtArgs>
    _count?: boolean | VehicleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehicleTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleType"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      max_passengers: number
      max_luggage_standard: number
      max_luggage_small: number
    }, ExtArgs["result"]["vehicleType"]>
    composites: {}
  }

  type VehicleTypeGetPayload<S extends boolean | null | undefined | VehicleTypeDefaultArgs> = $Result.GetResult<Prisma.$VehicleTypePayload, S>

  type VehicleTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleTypeCountAggregateInputType | true
    }

  export interface VehicleTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleType'], meta: { name: 'VehicleType' } }
    /**
     * Find zero or one VehicleType that matches the filter.
     * @param {VehicleTypeFindUniqueArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleTypeFindUniqueArgs>(args: SelectSubset<T, VehicleTypeFindUniqueArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleTypeFindUniqueOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleTypeFindFirstArgs>(args?: SelectSubset<T, VehicleTypeFindFirstArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany()
     * 
     * // Get first 10 VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleTypeWithIdOnly = await prisma.vehicleType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleTypeFindManyArgs>(args?: SelectSubset<T, VehicleTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleType.
     * @param {VehicleTypeCreateArgs} args - Arguments to create a VehicleType.
     * @example
     * // Create one VehicleType
     * const VehicleType = await prisma.vehicleType.create({
     *   data: {
     *     // ... data to create a VehicleType
     *   }
     * })
     * 
     */
    create<T extends VehicleTypeCreateArgs>(args: SelectSubset<T, VehicleTypeCreateArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleTypes.
     * @param {VehicleTypeCreateManyArgs} args - Arguments to create many VehicleTypes.
     * @example
     * // Create many VehicleTypes
     * const vehicleType = await prisma.vehicleType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleTypeCreateManyArgs>(args?: SelectSubset<T, VehicleTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleTypes and returns the data saved in the database.
     * @param {VehicleTypeCreateManyAndReturnArgs} args - Arguments to create many VehicleTypes.
     * @example
     * // Create many VehicleTypes
     * const vehicleType = await prisma.vehicleType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleTypes and only return the `id`
     * const vehicleTypeWithIdOnly = await prisma.vehicleType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleType.
     * @param {VehicleTypeDeleteArgs} args - Arguments to delete one VehicleType.
     * @example
     * // Delete one VehicleType
     * const VehicleType = await prisma.vehicleType.delete({
     *   where: {
     *     // ... filter to delete one VehicleType
     *   }
     * })
     * 
     */
    delete<T extends VehicleTypeDeleteArgs>(args: SelectSubset<T, VehicleTypeDeleteArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleType.
     * @param {VehicleTypeUpdateArgs} args - Arguments to update one VehicleType.
     * @example
     * // Update one VehicleType
     * const vehicleType = await prisma.vehicleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleTypeUpdateArgs>(args: SelectSubset<T, VehicleTypeUpdateArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleTypes.
     * @param {VehicleTypeDeleteManyArgs} args - Arguments to filter VehicleTypes to delete.
     * @example
     * // Delete a few VehicleTypes
     * const { count } = await prisma.vehicleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleTypeDeleteManyArgs>(args?: SelectSubset<T, VehicleTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleTypes
     * const vehicleType = await prisma.vehicleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleTypeUpdateManyArgs>(args: SelectSubset<T, VehicleTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleTypes and returns the data updated in the database.
     * @param {VehicleTypeUpdateManyAndReturnArgs} args - Arguments to update many VehicleTypes.
     * @example
     * // Update many VehicleTypes
     * const vehicleType = await prisma.vehicleType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleTypes and only return the `id`
     * const vehicleTypeWithIdOnly = await prisma.vehicleType.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleType.
     * @param {VehicleTypeUpsertArgs} args - Arguments to update or create a VehicleType.
     * @example
     * // Update or create a VehicleType
     * const vehicleType = await prisma.vehicleType.upsert({
     *   create: {
     *     // ... data to create a VehicleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleType we want to update
     *   }
     * })
     */
    upsert<T extends VehicleTypeUpsertArgs>(args: SelectSubset<T, VehicleTypeUpsertArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeCountArgs} args - Arguments to filter VehicleTypes to count.
     * @example
     * // Count the number of VehicleTypes
     * const count = await prisma.vehicleType.count({
     *   where: {
     *     // ... the filter for the VehicleTypes we want to count
     *   }
     * })
    **/
    count<T extends VehicleTypeCountArgs>(
      args?: Subset<T, VehicleTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleTypeAggregateArgs>(args: Subset<T, VehicleTypeAggregateArgs>): Prisma.PrismaPromise<GetVehicleTypeAggregateType<T>>

    /**
     * Group by VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeGroupByArgs} args - Group by arguments.
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
      T extends VehicleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleTypeGroupByArgs['orderBy'] }
        : { orderBy?: VehicleTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleType model
   */
  readonly fields: VehicleTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends VehicleType$carsArgs<ExtArgs> = {}>(args?: Subset<T, VehicleType$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VehicleType model
   */
  interface VehicleTypeFieldRefs {
    readonly id: FieldRef<"VehicleType", 'String'>
    readonly name: FieldRef<"VehicleType", 'String'>
    readonly max_passengers: FieldRef<"VehicleType", 'Int'>
    readonly max_luggage_standard: FieldRef<"VehicleType", 'Int'>
    readonly max_luggage_small: FieldRef<"VehicleType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VehicleType findUnique
   */
  export type VehicleTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType findUniqueOrThrow
   */
  export type VehicleTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType findFirst
   */
  export type VehicleTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType findFirstOrThrow
   */
  export type VehicleTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType findMany
   */
  export type VehicleTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleTypes to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType create
   */
  export type VehicleTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleType.
     */
    data: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
  }

  /**
   * VehicleType createMany
   */
  export type VehicleTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleTypes.
     */
    data: VehicleTypeCreateManyInput | VehicleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleType createManyAndReturn
   */
  export type VehicleTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleTypes.
     */
    data: VehicleTypeCreateManyInput | VehicleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleType update
   */
  export type VehicleTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleType.
     */
    data: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
    /**
     * Choose, which VehicleType to update.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType updateMany
   */
  export type VehicleTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleTypes.
     */
    data: XOR<VehicleTypeUpdateManyMutationInput, VehicleTypeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleTypes to update
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to update.
     */
    limit?: number
  }

  /**
   * VehicleType updateManyAndReturn
   */
  export type VehicleTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * The data used to update VehicleTypes.
     */
    data: XOR<VehicleTypeUpdateManyMutationInput, VehicleTypeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleTypes to update
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to update.
     */
    limit?: number
  }

  /**
   * VehicleType upsert
   */
  export type VehicleTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleType to update in case it exists.
     */
    where: VehicleTypeWhereUniqueInput
    /**
     * In case the VehicleType found by the `where` argument doesn't exist, create a new VehicleType with this data.
     */
    create: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
    /**
     * In case the VehicleType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
  }

  /**
   * VehicleType delete
   */
  export type VehicleTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter which VehicleType to delete.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType deleteMany
   */
  export type VehicleTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleTypes to delete
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to delete.
     */
    limit?: number
  }

  /**
   * VehicleType.cars
   */
  export type VehicleType$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * VehicleType without action
   */
  export type VehicleTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
  }


  /**
   * Model RegionTranslation
   */

  export type AggregateRegionTranslation = {
    _count: RegionTranslationCountAggregateOutputType | null
    _min: RegionTranslationMinAggregateOutputType | null
    _max: RegionTranslationMaxAggregateOutputType | null
  }

  export type RegionTranslationMinAggregateOutputType = {
    id: string | null
    region_id: string | null
    locale: string | null
    name: string | null
  }

  export type RegionTranslationMaxAggregateOutputType = {
    id: string | null
    region_id: string | null
    locale: string | null
    name: string | null
  }

  export type RegionTranslationCountAggregateOutputType = {
    id: number
    region_id: number
    locale: number
    name: number
    _all: number
  }


  export type RegionTranslationMinAggregateInputType = {
    id?: true
    region_id?: true
    locale?: true
    name?: true
  }

  export type RegionTranslationMaxAggregateInputType = {
    id?: true
    region_id?: true
    locale?: true
    name?: true
  }

  export type RegionTranslationCountAggregateInputType = {
    id?: true
    region_id?: true
    locale?: true
    name?: true
    _all?: true
  }

  export type RegionTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegionTranslation to aggregate.
     */
    where?: RegionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionTranslations to fetch.
     */
    orderBy?: RegionTranslationOrderByWithRelationInput | RegionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegionTranslations
    **/
    _count?: true | RegionTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionTranslationMaxAggregateInputType
  }

  export type GetRegionTranslationAggregateType<T extends RegionTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegionTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegionTranslation[P]>
      : GetScalarType<T[P], AggregateRegionTranslation[P]>
  }




  export type RegionTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionTranslationWhereInput
    orderBy?: RegionTranslationOrderByWithAggregationInput | RegionTranslationOrderByWithAggregationInput[]
    by: RegionTranslationScalarFieldEnum[] | RegionTranslationScalarFieldEnum
    having?: RegionTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionTranslationCountAggregateInputType | true
    _min?: RegionTranslationMinAggregateInputType
    _max?: RegionTranslationMaxAggregateInputType
  }

  export type RegionTranslationGroupByOutputType = {
    id: string
    region_id: string
    locale: string
    name: string
    _count: RegionTranslationCountAggregateOutputType | null
    _min: RegionTranslationMinAggregateOutputType | null
    _max: RegionTranslationMaxAggregateOutputType | null
  }

  type GetRegionTranslationGroupByPayload<T extends RegionTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], RegionTranslationGroupByOutputType[P]>
        }
      >
    >


  export type RegionTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region_id?: boolean
    locale?: boolean
    name?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regionTranslation"]>

  export type RegionTranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region_id?: boolean
    locale?: boolean
    name?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regionTranslation"]>

  export type RegionTranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region_id?: boolean
    locale?: boolean
    name?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regionTranslation"]>

  export type RegionTranslationSelectScalar = {
    id?: boolean
    region_id?: boolean
    locale?: boolean
    name?: boolean
  }

  export type RegionTranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "region_id" | "locale" | "name", ExtArgs["result"]["regionTranslation"]>
  export type RegionTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }
  export type RegionTranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }
  export type RegionTranslationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }

  export type $RegionTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegionTranslation"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      region_id: string
      locale: string
      name: string
    }, ExtArgs["result"]["regionTranslation"]>
    composites: {}
  }

  type RegionTranslationGetPayload<S extends boolean | null | undefined | RegionTranslationDefaultArgs> = $Result.GetResult<Prisma.$RegionTranslationPayload, S>

  type RegionTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionTranslationCountAggregateInputType | true
    }

  export interface RegionTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegionTranslation'], meta: { name: 'RegionTranslation' } }
    /**
     * Find zero or one RegionTranslation that matches the filter.
     * @param {RegionTranslationFindUniqueArgs} args - Arguments to find a RegionTranslation
     * @example
     * // Get one RegionTranslation
     * const regionTranslation = await prisma.regionTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionTranslationFindUniqueArgs>(args: SelectSubset<T, RegionTranslationFindUniqueArgs<ExtArgs>>): Prisma__RegionTranslationClient<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegionTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionTranslationFindUniqueOrThrowArgs} args - Arguments to find a RegionTranslation
     * @example
     * // Get one RegionTranslation
     * const regionTranslation = await prisma.regionTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionTranslationClient<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegionTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionTranslationFindFirstArgs} args - Arguments to find a RegionTranslation
     * @example
     * // Get one RegionTranslation
     * const regionTranslation = await prisma.regionTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionTranslationFindFirstArgs>(args?: SelectSubset<T, RegionTranslationFindFirstArgs<ExtArgs>>): Prisma__RegionTranslationClient<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegionTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionTranslationFindFirstOrThrowArgs} args - Arguments to find a RegionTranslation
     * @example
     * // Get one RegionTranslation
     * const regionTranslation = await prisma.regionTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionTranslationClient<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegionTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegionTranslations
     * const regionTranslations = await prisma.regionTranslation.findMany()
     * 
     * // Get first 10 RegionTranslations
     * const regionTranslations = await prisma.regionTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionTranslationWithIdOnly = await prisma.regionTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionTranslationFindManyArgs>(args?: SelectSubset<T, RegionTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegionTranslation.
     * @param {RegionTranslationCreateArgs} args - Arguments to create a RegionTranslation.
     * @example
     * // Create one RegionTranslation
     * const RegionTranslation = await prisma.regionTranslation.create({
     *   data: {
     *     // ... data to create a RegionTranslation
     *   }
     * })
     * 
     */
    create<T extends RegionTranslationCreateArgs>(args: SelectSubset<T, RegionTranslationCreateArgs<ExtArgs>>): Prisma__RegionTranslationClient<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegionTranslations.
     * @param {RegionTranslationCreateManyArgs} args - Arguments to create many RegionTranslations.
     * @example
     * // Create many RegionTranslations
     * const regionTranslation = await prisma.regionTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionTranslationCreateManyArgs>(args?: SelectSubset<T, RegionTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegionTranslations and returns the data saved in the database.
     * @param {RegionTranslationCreateManyAndReturnArgs} args - Arguments to create many RegionTranslations.
     * @example
     * // Create many RegionTranslations
     * const regionTranslation = await prisma.regionTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegionTranslations and only return the `id`
     * const regionTranslationWithIdOnly = await prisma.regionTranslation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionTranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegionTranslation.
     * @param {RegionTranslationDeleteArgs} args - Arguments to delete one RegionTranslation.
     * @example
     * // Delete one RegionTranslation
     * const RegionTranslation = await prisma.regionTranslation.delete({
     *   where: {
     *     // ... filter to delete one RegionTranslation
     *   }
     * })
     * 
     */
    delete<T extends RegionTranslationDeleteArgs>(args: SelectSubset<T, RegionTranslationDeleteArgs<ExtArgs>>): Prisma__RegionTranslationClient<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegionTranslation.
     * @param {RegionTranslationUpdateArgs} args - Arguments to update one RegionTranslation.
     * @example
     * // Update one RegionTranslation
     * const regionTranslation = await prisma.regionTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionTranslationUpdateArgs>(args: SelectSubset<T, RegionTranslationUpdateArgs<ExtArgs>>): Prisma__RegionTranslationClient<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegionTranslations.
     * @param {RegionTranslationDeleteManyArgs} args - Arguments to filter RegionTranslations to delete.
     * @example
     * // Delete a few RegionTranslations
     * const { count } = await prisma.regionTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionTranslationDeleteManyArgs>(args?: SelectSubset<T, RegionTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegionTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegionTranslations
     * const regionTranslation = await prisma.regionTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionTranslationUpdateManyArgs>(args: SelectSubset<T, RegionTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegionTranslations and returns the data updated in the database.
     * @param {RegionTranslationUpdateManyAndReturnArgs} args - Arguments to update many RegionTranslations.
     * @example
     * // Update many RegionTranslations
     * const regionTranslation = await prisma.regionTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegionTranslations and only return the `id`
     * const regionTranslationWithIdOnly = await prisma.regionTranslation.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegionTranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionTranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegionTranslation.
     * @param {RegionTranslationUpsertArgs} args - Arguments to update or create a RegionTranslation.
     * @example
     * // Update or create a RegionTranslation
     * const regionTranslation = await prisma.regionTranslation.upsert({
     *   create: {
     *     // ... data to create a RegionTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegionTranslation we want to update
     *   }
     * })
     */
    upsert<T extends RegionTranslationUpsertArgs>(args: SelectSubset<T, RegionTranslationUpsertArgs<ExtArgs>>): Prisma__RegionTranslationClient<$Result.GetResult<Prisma.$RegionTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegionTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionTranslationCountArgs} args - Arguments to filter RegionTranslations to count.
     * @example
     * // Count the number of RegionTranslations
     * const count = await prisma.regionTranslation.count({
     *   where: {
     *     // ... the filter for the RegionTranslations we want to count
     *   }
     * })
    **/
    count<T extends RegionTranslationCountArgs>(
      args?: Subset<T, RegionTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegionTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionTranslationAggregateArgs>(args: Subset<T, RegionTranslationAggregateArgs>): Prisma.PrismaPromise<GetRegionTranslationAggregateType<T>>

    /**
     * Group by RegionTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionTranslationGroupByArgs} args - Group by arguments.
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
      T extends RegionTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionTranslationGroupByArgs['orderBy'] }
        : { orderBy?: RegionTranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegionTranslation model
   */
  readonly fields: RegionTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegionTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegionTranslation model
   */
  interface RegionTranslationFieldRefs {
    readonly id: FieldRef<"RegionTranslation", 'String'>
    readonly region_id: FieldRef<"RegionTranslation", 'String'>
    readonly locale: FieldRef<"RegionTranslation", 'String'>
    readonly name: FieldRef<"RegionTranslation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RegionTranslation findUnique
   */
  export type RegionTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which RegionTranslation to fetch.
     */
    where: RegionTranslationWhereUniqueInput
  }

  /**
   * RegionTranslation findUniqueOrThrow
   */
  export type RegionTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which RegionTranslation to fetch.
     */
    where: RegionTranslationWhereUniqueInput
  }

  /**
   * RegionTranslation findFirst
   */
  export type RegionTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which RegionTranslation to fetch.
     */
    where?: RegionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionTranslations to fetch.
     */
    orderBy?: RegionTranslationOrderByWithRelationInput | RegionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegionTranslations.
     */
    cursor?: RegionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegionTranslations.
     */
    distinct?: RegionTranslationScalarFieldEnum | RegionTranslationScalarFieldEnum[]
  }

  /**
   * RegionTranslation findFirstOrThrow
   */
  export type RegionTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which RegionTranslation to fetch.
     */
    where?: RegionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionTranslations to fetch.
     */
    orderBy?: RegionTranslationOrderByWithRelationInput | RegionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegionTranslations.
     */
    cursor?: RegionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegionTranslations.
     */
    distinct?: RegionTranslationScalarFieldEnum | RegionTranslationScalarFieldEnum[]
  }

  /**
   * RegionTranslation findMany
   */
  export type RegionTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which RegionTranslations to fetch.
     */
    where?: RegionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionTranslations to fetch.
     */
    orderBy?: RegionTranslationOrderByWithRelationInput | RegionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegionTranslations.
     */
    cursor?: RegionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionTranslations.
     */
    skip?: number
    distinct?: RegionTranslationScalarFieldEnum | RegionTranslationScalarFieldEnum[]
  }

  /**
   * RegionTranslation create
   */
  export type RegionTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a RegionTranslation.
     */
    data: XOR<RegionTranslationCreateInput, RegionTranslationUncheckedCreateInput>
  }

  /**
   * RegionTranslation createMany
   */
  export type RegionTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegionTranslations.
     */
    data: RegionTranslationCreateManyInput | RegionTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegionTranslation createManyAndReturn
   */
  export type RegionTranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * The data used to create many RegionTranslations.
     */
    data: RegionTranslationCreateManyInput | RegionTranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegionTranslation update
   */
  export type RegionTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a RegionTranslation.
     */
    data: XOR<RegionTranslationUpdateInput, RegionTranslationUncheckedUpdateInput>
    /**
     * Choose, which RegionTranslation to update.
     */
    where: RegionTranslationWhereUniqueInput
  }

  /**
   * RegionTranslation updateMany
   */
  export type RegionTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegionTranslations.
     */
    data: XOR<RegionTranslationUpdateManyMutationInput, RegionTranslationUncheckedUpdateManyInput>
    /**
     * Filter which RegionTranslations to update
     */
    where?: RegionTranslationWhereInput
    /**
     * Limit how many RegionTranslations to update.
     */
    limit?: number
  }

  /**
   * RegionTranslation updateManyAndReturn
   */
  export type RegionTranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * The data used to update RegionTranslations.
     */
    data: XOR<RegionTranslationUpdateManyMutationInput, RegionTranslationUncheckedUpdateManyInput>
    /**
     * Filter which RegionTranslations to update
     */
    where?: RegionTranslationWhereInput
    /**
     * Limit how many RegionTranslations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegionTranslation upsert
   */
  export type RegionTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the RegionTranslation to update in case it exists.
     */
    where: RegionTranslationWhereUniqueInput
    /**
     * In case the RegionTranslation found by the `where` argument doesn't exist, create a new RegionTranslation with this data.
     */
    create: XOR<RegionTranslationCreateInput, RegionTranslationUncheckedCreateInput>
    /**
     * In case the RegionTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionTranslationUpdateInput, RegionTranslationUncheckedUpdateInput>
  }

  /**
   * RegionTranslation delete
   */
  export type RegionTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
    /**
     * Filter which RegionTranslation to delete.
     */
    where: RegionTranslationWhereUniqueInput
  }

  /**
   * RegionTranslation deleteMany
   */
  export type RegionTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegionTranslations to delete
     */
    where?: RegionTranslationWhereInput
    /**
     * Limit how many RegionTranslations to delete.
     */
    limit?: number
  }

  /**
   * RegionTranslation without action
   */
  export type RegionTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionTranslation
     */
    select?: RegionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionTranslation
     */
    omit?: RegionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionTranslationInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DriverProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    regionId: 'regionId',
    rating: 'rating',
    status: 'status'
  };

  export type DriverProfileScalarFieldEnum = (typeof DriverProfileScalarFieldEnum)[keyof typeof DriverProfileScalarFieldEnum]


  export const AdminProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type AdminProfileScalarFieldEnum = (typeof AdminProfileScalarFieldEnum)[keyof typeof AdminProfileScalarFieldEnum]


  export const ClientProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type ClientProfileScalarFieldEnum = (typeof ClientProfileScalarFieldEnum)[keyof typeof ClientProfileScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    vehicle_type_id: 'vehicle_type_id',
    brand: 'brand',
    model: 'model',
    year: 'year',
    color: 'color',
    license_plate: 'license_plate',
    verification_status: 'verification_status'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const VehicleMediaScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type VehicleMediaScalarFieldEnum = (typeof VehicleMediaScalarFieldEnum)[keyof typeof VehicleMediaScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    regionId: 'regionId',
    driverId: 'driverId',
    car_id: 'car_id',
    name: 'name',
    from_address: 'from_address',
    to_address: 'to_address',
    distance: 'distance',
    price: 'price',
    currency: 'currency',
    status: 'status',
    trip_datetime: 'trip_datetime',
    notes: 'notes',
    passenger_count: 'passenger_count',
    flight_number: 'flight_number'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    driverId: 'driverId',
    clientId: 'clientId',
    score: 'score',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    type: 'type',
    file_url: 'file_url',
    status: 'status',
    expires_at: 'expires_at'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    target_entity: 'target_entity',
    target_id: 'target_id',
    created_at: 'created_at'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    parent_id: 'parent_id',
    name: 'name',
    type: 'type',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const VehicleTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    max_passengers: 'max_passengers',
    max_luggage_standard: 'max_luggage_standard',
    max_luggage_small: 'max_luggage_small'
  };

  export type VehicleTypeScalarFieldEnum = (typeof VehicleTypeScalarFieldEnum)[keyof typeof VehicleTypeScalarFieldEnum]


  export const RegionTranslationScalarFieldEnum: {
    id: 'id',
    region_id: 'region_id',
    locale: 'locale',
    name: 'name'
  };

  export type RegionTranslationScalarFieldEnum = (typeof RegionTranslationScalarFieldEnum)[keyof typeof RegionTranslationScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VehicleVerificationStatus'
   */
  export type EnumVehicleVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleVerificationStatus'>
    


  /**
   * Reference to a field of type 'VehicleVerificationStatus[]'
   */
  export type ListEnumVehicleVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleVerificationStatus[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    


  /**
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'DocumentStatus[]'
   */
  export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>
    


  /**
   * Reference to a field of type 'RegionType'
   */
  export type EnumRegionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegionType'>
    


  /**
   * Reference to a field of type 'RegionType[]'
   */
  export type ListEnumRegionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegionType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    driverProfile?: XOR<DriverProfileNullableScalarRelationFilter, DriverProfileWhereInput> | null
    adminProfile?: XOR<AdminProfileNullableScalarRelationFilter, AdminProfileWhereInput> | null
    clientProfile?: XOR<ClientProfileNullableScalarRelationFilter, ClientProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driverProfile?: DriverProfileOrderByWithRelationInput
    adminProfile?: AdminProfileOrderByWithRelationInput
    clientProfile?: ClientProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    driverProfile?: XOR<DriverProfileNullableScalarRelationFilter, DriverProfileWhereInput> | null
    adminProfile?: XOR<AdminProfileNullableScalarRelationFilter, AdminProfileWhereInput> | null
    clientProfile?: XOR<ClientProfileNullableScalarRelationFilter, ClientProfileWhereInput> | null
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DriverProfileWhereInput = {
    AND?: DriverProfileWhereInput | DriverProfileWhereInput[]
    OR?: DriverProfileWhereInput[]
    NOT?: DriverProfileWhereInput | DriverProfileWhereInput[]
    id?: StringFilter<"DriverProfile"> | string
    userId?: StringFilter<"DriverProfile"> | string
    name?: StringNullableFilter<"DriverProfile"> | string | null
    regionId?: StringNullableFilter<"DriverProfile"> | string | null
    rating?: FloatFilter<"DriverProfile"> | number
    status?: IntFilter<"DriverProfile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    region?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
    cars?: CarListRelationFilter
    documents?: DocumentListRelationFilter
    orders?: OrderListRelationFilter
    ratings?: RatingListRelationFilter
  }

  export type DriverProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    regionId?: SortOrderInput | SortOrder
    rating?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    region?: RegionOrderByWithRelationInput
    cars?: CarOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
  }

  export type DriverProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: DriverProfileWhereInput | DriverProfileWhereInput[]
    OR?: DriverProfileWhereInput[]
    NOT?: DriverProfileWhereInput | DriverProfileWhereInput[]
    name?: StringNullableFilter<"DriverProfile"> | string | null
    regionId?: StringNullableFilter<"DriverProfile"> | string | null
    rating?: FloatFilter<"DriverProfile"> | number
    status?: IntFilter<"DriverProfile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    region?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
    cars?: CarListRelationFilter
    documents?: DocumentListRelationFilter
    orders?: OrderListRelationFilter
    ratings?: RatingListRelationFilter
  }, "id" | "userId">

  export type DriverProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    regionId?: SortOrderInput | SortOrder
    rating?: SortOrder
    status?: SortOrder
    _count?: DriverProfileCountOrderByAggregateInput
    _avg?: DriverProfileAvgOrderByAggregateInput
    _max?: DriverProfileMaxOrderByAggregateInput
    _min?: DriverProfileMinOrderByAggregateInput
    _sum?: DriverProfileSumOrderByAggregateInput
  }

  export type DriverProfileScalarWhereWithAggregatesInput = {
    AND?: DriverProfileScalarWhereWithAggregatesInput | DriverProfileScalarWhereWithAggregatesInput[]
    OR?: DriverProfileScalarWhereWithAggregatesInput[]
    NOT?: DriverProfileScalarWhereWithAggregatesInput | DriverProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DriverProfile"> | string
    userId?: StringWithAggregatesFilter<"DriverProfile"> | string
    name?: StringNullableWithAggregatesFilter<"DriverProfile"> | string | null
    regionId?: StringNullableWithAggregatesFilter<"DriverProfile"> | string | null
    rating?: FloatWithAggregatesFilter<"DriverProfile"> | number
    status?: IntWithAggregatesFilter<"DriverProfile"> | number
  }

  export type AdminProfileWhereInput = {
    AND?: AdminProfileWhereInput | AdminProfileWhereInput[]
    OR?: AdminProfileWhereInput[]
    NOT?: AdminProfileWhereInput | AdminProfileWhereInput[]
    id?: StringFilter<"AdminProfile"> | string
    userId?: StringFilter<"AdminProfile"> | string
    name?: StringNullableFilter<"AdminProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    audit_logs?: AuditLogListRelationFilter
  }

  export type AdminProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    audit_logs?: AuditLogOrderByRelationAggregateInput
  }

  export type AdminProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminProfileWhereInput | AdminProfileWhereInput[]
    OR?: AdminProfileWhereInput[]
    NOT?: AdminProfileWhereInput | AdminProfileWhereInput[]
    name?: StringNullableFilter<"AdminProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    audit_logs?: AuditLogListRelationFilter
  }, "id" | "userId">

  export type AdminProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: AdminProfileCountOrderByAggregateInput
    _max?: AdminProfileMaxOrderByAggregateInput
    _min?: AdminProfileMinOrderByAggregateInput
  }

  export type AdminProfileScalarWhereWithAggregatesInput = {
    AND?: AdminProfileScalarWhereWithAggregatesInput | AdminProfileScalarWhereWithAggregatesInput[]
    OR?: AdminProfileScalarWhereWithAggregatesInput[]
    NOT?: AdminProfileScalarWhereWithAggregatesInput | AdminProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminProfile"> | string
    userId?: StringWithAggregatesFilter<"AdminProfile"> | string
    name?: StringNullableWithAggregatesFilter<"AdminProfile"> | string | null
  }

  export type ClientProfileWhereInput = {
    AND?: ClientProfileWhereInput | ClientProfileWhereInput[]
    OR?: ClientProfileWhereInput[]
    NOT?: ClientProfileWhereInput | ClientProfileWhereInput[]
    id?: StringFilter<"ClientProfile"> | string
    userId?: StringFilter<"ClientProfile"> | string
    name?: StringNullableFilter<"ClientProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
    ratings?: RatingListRelationFilter
  }

  export type ClientProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
  }

  export type ClientProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ClientProfileWhereInput | ClientProfileWhereInput[]
    OR?: ClientProfileWhereInput[]
    NOT?: ClientProfileWhereInput | ClientProfileWhereInput[]
    name?: StringNullableFilter<"ClientProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
    ratings?: RatingListRelationFilter
  }, "id" | "userId">

  export type ClientProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: ClientProfileCountOrderByAggregateInput
    _max?: ClientProfileMaxOrderByAggregateInput
    _min?: ClientProfileMinOrderByAggregateInput
  }

  export type ClientProfileScalarWhereWithAggregatesInput = {
    AND?: ClientProfileScalarWhereWithAggregatesInput | ClientProfileScalarWhereWithAggregatesInput[]
    OR?: ClientProfileScalarWhereWithAggregatesInput[]
    NOT?: ClientProfileScalarWhereWithAggregatesInput | ClientProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientProfile"> | string
    userId?: StringWithAggregatesFilter<"ClientProfile"> | string
    name?: StringNullableWithAggregatesFilter<"ClientProfile"> | string | null
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: StringFilter<"Car"> | string
    driverId?: StringFilter<"Car"> | string
    vehicle_type_id?: StringFilter<"Car"> | string
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    color?: StringNullableFilter<"Car"> | string | null
    license_plate?: StringFilter<"Car"> | string
    verification_status?: EnumVehicleVerificationStatusFilter<"Car"> | $Enums.VehicleVerificationStatus
    driver?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
    vehicle_type?: XOR<VehicleTypeScalarRelationFilter, VehicleTypeWhereInput>
    orders?: OrderListRelationFilter
    media?: VehicleMediaListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicle_type_id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrderInput | SortOrder
    license_plate?: SortOrder
    verification_status?: SortOrder
    driver?: DriverProfileOrderByWithRelationInput
    vehicle_type?: VehicleTypeOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    media?: VehicleMediaOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    license_plate?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    driverId?: StringFilter<"Car"> | string
    vehicle_type_id?: StringFilter<"Car"> | string
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    color?: StringNullableFilter<"Car"> | string | null
    verification_status?: EnumVehicleVerificationStatusFilter<"Car"> | $Enums.VehicleVerificationStatus
    driver?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
    vehicle_type?: XOR<VehicleTypeScalarRelationFilter, VehicleTypeWhereInput>
    orders?: OrderListRelationFilter
    media?: VehicleMediaListRelationFilter
  }, "id" | "license_plate">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicle_type_id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrderInput | SortOrder
    license_plate?: SortOrder
    verification_status?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Car"> | string
    driverId?: StringWithAggregatesFilter<"Car"> | string
    vehicle_type_id?: StringWithAggregatesFilter<"Car"> | string
    brand?: StringWithAggregatesFilter<"Car"> | string
    model?: StringWithAggregatesFilter<"Car"> | string
    year?: IntWithAggregatesFilter<"Car"> | number
    color?: StringNullableWithAggregatesFilter<"Car"> | string | null
    license_plate?: StringWithAggregatesFilter<"Car"> | string
    verification_status?: EnumVehicleVerificationStatusWithAggregatesFilter<"Car"> | $Enums.VehicleVerificationStatus
  }

  export type VehicleMediaWhereInput = {
    AND?: VehicleMediaWhereInput | VehicleMediaWhereInput[]
    OR?: VehicleMediaWhereInput[]
    NOT?: VehicleMediaWhereInput | VehicleMediaWhereInput[]
    id?: StringFilter<"VehicleMedia"> | string
    carId?: StringFilter<"VehicleMedia"> | string
    url?: StringFilter<"VehicleMedia"> | string
    type?: EnumMediaTypeFilter<"VehicleMedia"> | $Enums.MediaType
    createdAt?: DateTimeFilter<"VehicleMedia"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type VehicleMediaOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type VehicleMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleMediaWhereInput | VehicleMediaWhereInput[]
    OR?: VehicleMediaWhereInput[]
    NOT?: VehicleMediaWhereInput | VehicleMediaWhereInput[]
    carId?: StringFilter<"VehicleMedia"> | string
    url?: StringFilter<"VehicleMedia"> | string
    type?: EnumMediaTypeFilter<"VehicleMedia"> | $Enums.MediaType
    createdAt?: DateTimeFilter<"VehicleMedia"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type VehicleMediaOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: VehicleMediaCountOrderByAggregateInput
    _max?: VehicleMediaMaxOrderByAggregateInput
    _min?: VehicleMediaMinOrderByAggregateInput
  }

  export type VehicleMediaScalarWhereWithAggregatesInput = {
    AND?: VehicleMediaScalarWhereWithAggregatesInput | VehicleMediaScalarWhereWithAggregatesInput[]
    OR?: VehicleMediaScalarWhereWithAggregatesInput[]
    NOT?: VehicleMediaScalarWhereWithAggregatesInput | VehicleMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleMedia"> | string
    carId?: StringWithAggregatesFilter<"VehicleMedia"> | string
    url?: StringWithAggregatesFilter<"VehicleMedia"> | string
    type?: EnumMediaTypeWithAggregatesFilter<"VehicleMedia"> | $Enums.MediaType
    createdAt?: DateTimeWithAggregatesFilter<"VehicleMedia"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    clientId?: StringNullableFilter<"Order"> | string | null
    regionId?: StringNullableFilter<"Order"> | string | null
    driverId?: StringNullableFilter<"Order"> | string | null
    car_id?: StringNullableFilter<"Order"> | string | null
    name?: StringNullableFilter<"Order"> | string | null
    from_address?: StringFilter<"Order"> | string
    to_address?: StringFilter<"Order"> | string
    distance?: FloatNullableFilter<"Order"> | number | null
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    trip_datetime?: DateTimeFilter<"Order"> | Date | string
    notes?: StringNullableFilter<"Order"> | string | null
    passenger_count?: IntFilter<"Order"> | number
    flight_number?: StringNullableFilter<"Order"> | string | null
    client?: XOR<ClientProfileNullableScalarRelationFilter, ClientProfileWhereInput> | null
    region?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
    driver?: XOR<DriverProfileNullableScalarRelationFilter, DriverProfileWhereInput> | null
    car?: XOR<CarNullableScalarRelationFilter, CarWhereInput> | null
    rating?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    regionId?: SortOrderInput | SortOrder
    driverId?: SortOrderInput | SortOrder
    car_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    distance?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    trip_datetime?: SortOrder
    notes?: SortOrderInput | SortOrder
    passenger_count?: SortOrder
    flight_number?: SortOrderInput | SortOrder
    client?: ClientProfileOrderByWithRelationInput
    region?: RegionOrderByWithRelationInput
    driver?: DriverProfileOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
    rating?: RatingOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    clientId?: StringNullableFilter<"Order"> | string | null
    regionId?: StringNullableFilter<"Order"> | string | null
    driverId?: StringNullableFilter<"Order"> | string | null
    car_id?: StringNullableFilter<"Order"> | string | null
    name?: StringNullableFilter<"Order"> | string | null
    from_address?: StringFilter<"Order"> | string
    to_address?: StringFilter<"Order"> | string
    distance?: FloatNullableFilter<"Order"> | number | null
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    trip_datetime?: DateTimeFilter<"Order"> | Date | string
    notes?: StringNullableFilter<"Order"> | string | null
    passenger_count?: IntFilter<"Order"> | number
    flight_number?: StringNullableFilter<"Order"> | string | null
    client?: XOR<ClientProfileNullableScalarRelationFilter, ClientProfileWhereInput> | null
    region?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
    driver?: XOR<DriverProfileNullableScalarRelationFilter, DriverProfileWhereInput> | null
    car?: XOR<CarNullableScalarRelationFilter, CarWhereInput> | null
    rating?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    regionId?: SortOrderInput | SortOrder
    driverId?: SortOrderInput | SortOrder
    car_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    distance?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    trip_datetime?: SortOrder
    notes?: SortOrderInput | SortOrder
    passenger_count?: SortOrder
    flight_number?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    clientId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    regionId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    driverId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    car_id?: StringNullableWithAggregatesFilter<"Order"> | string | null
    name?: StringNullableWithAggregatesFilter<"Order"> | string | null
    from_address?: StringWithAggregatesFilter<"Order"> | string
    to_address?: StringWithAggregatesFilter<"Order"> | string
    distance?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    price?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    trip_datetime?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    passenger_count?: IntWithAggregatesFilter<"Order"> | number
    flight_number?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: StringFilter<"Rating"> | string
    order_id?: StringFilter<"Rating"> | string
    driverId?: StringFilter<"Rating"> | string
    clientId?: StringFilter<"Rating"> | string
    score?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    driver?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
    client?: XOR<ClientProfileScalarRelationFilter, ClientProfileWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    driverId?: SortOrder
    clientId?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    driver?: DriverProfileOrderByWithRelationInput
    client?: ClientProfileOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order_id?: string
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    driverId?: StringFilter<"Rating"> | string
    clientId?: StringFilter<"Rating"> | string
    score?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    driver?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
    client?: XOR<ClientProfileScalarRelationFilter, ClientProfileWhereInput>
  }, "id" | "order_id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    driverId?: SortOrder
    clientId?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rating"> | string
    order_id?: StringWithAggregatesFilter<"Rating"> | string
    driverId?: StringWithAggregatesFilter<"Rating"> | string
    clientId?: StringWithAggregatesFilter<"Rating"> | string
    score?: IntWithAggregatesFilter<"Rating"> | number
    comment?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    driverId?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    file_url?: StringFilter<"Document"> | string
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    expires_at?: DateTimeNullableFilter<"Document"> | Date | string | null
    driver?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    file_url?: SortOrder
    status?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    driver?: DriverProfileOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    driverId_type?: DocumentDriverIdTypeCompoundUniqueInput
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    driverId?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    file_url?: StringFilter<"Document"> | string
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    expires_at?: DateTimeNullableFilter<"Document"> | Date | string | null
    driver?: XOR<DriverProfileScalarRelationFilter, DriverProfileWhereInput>
  }, "id" | "driverId_type">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    file_url?: SortOrder
    status?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    driverId?: StringWithAggregatesFilter<"Document"> | string
    type?: EnumDocumentTypeWithAggregatesFilter<"Document"> | $Enums.DocumentType
    file_url?: StringWithAggregatesFilter<"Document"> | string
    status?: EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus
    expires_at?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    adminId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    target_entity?: StringNullableFilter<"AuditLog"> | string | null
    target_id?: StringNullableFilter<"AuditLog"> | string | null
    created_at?: DateTimeFilter<"AuditLog"> | Date | string
    admin?: XOR<AdminProfileScalarRelationFilter, AdminProfileWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    target_entity?: SortOrderInput | SortOrder
    target_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    admin?: AdminProfileOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    adminId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    target_entity?: StringNullableFilter<"AuditLog"> | string | null
    target_id?: StringNullableFilter<"AuditLog"> | string | null
    created_at?: DateTimeFilter<"AuditLog"> | Date | string
    admin?: XOR<AdminProfileScalarRelationFilter, AdminProfileWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    target_entity?: SortOrderInput | SortOrder
    target_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    adminId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    target_entity?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    target_id?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: StringFilter<"Region"> | string
    parent_id?: StringNullableFilter<"Region"> | string | null
    name?: StringFilter<"Region"> | string
    type?: EnumRegionTypeFilter<"Region"> | $Enums.RegionType
    latitude?: FloatNullableFilter<"Region"> | number | null
    longitude?: FloatNullableFilter<"Region"> | number | null
    parent?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
    children?: RegionListRelationFilter
    drivers?: DriverProfileListRelationFilter
    translations?: RegionTranslationListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    parent?: RegionOrderByWithRelationInput
    children?: RegionOrderByRelationAggregateInput
    drivers?: DriverProfileOrderByRelationAggregateInput
    translations?: RegionTranslationOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    parent_id?: StringNullableFilter<"Region"> | string | null
    name?: StringFilter<"Region"> | string
    type?: EnumRegionTypeFilter<"Region"> | $Enums.RegionType
    latitude?: FloatNullableFilter<"Region"> | number | null
    longitude?: FloatNullableFilter<"Region"> | number | null
    parent?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
    children?: RegionListRelationFilter
    drivers?: DriverProfileListRelationFilter
    translations?: RegionTranslationListRelationFilter
    orders?: OrderListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Region"> | string
    parent_id?: StringNullableWithAggregatesFilter<"Region"> | string | null
    name?: StringWithAggregatesFilter<"Region"> | string
    type?: EnumRegionTypeWithAggregatesFilter<"Region"> | $Enums.RegionType
    latitude?: FloatNullableWithAggregatesFilter<"Region"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Region"> | number | null
  }

  export type VehicleTypeWhereInput = {
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    id?: StringFilter<"VehicleType"> | string
    name?: StringFilter<"VehicleType"> | string
    max_passengers?: IntFilter<"VehicleType"> | number
    max_luggage_standard?: IntFilter<"VehicleType"> | number
    max_luggage_small?: IntFilter<"VehicleType"> | number
    cars?: CarListRelationFilter
  }

  export type VehicleTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    max_passengers?: SortOrder
    max_luggage_standard?: SortOrder
    max_luggage_small?: SortOrder
    cars?: CarOrderByRelationAggregateInput
  }

  export type VehicleTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    max_passengers?: IntFilter<"VehicleType"> | number
    max_luggage_standard?: IntFilter<"VehicleType"> | number
    max_luggage_small?: IntFilter<"VehicleType"> | number
    cars?: CarListRelationFilter
  }, "id" | "name">

  export type VehicleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    max_passengers?: SortOrder
    max_luggage_standard?: SortOrder
    max_luggage_small?: SortOrder
    _count?: VehicleTypeCountOrderByAggregateInput
    _avg?: VehicleTypeAvgOrderByAggregateInput
    _max?: VehicleTypeMaxOrderByAggregateInput
    _min?: VehicleTypeMinOrderByAggregateInput
    _sum?: VehicleTypeSumOrderByAggregateInput
  }

  export type VehicleTypeScalarWhereWithAggregatesInput = {
    AND?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    OR?: VehicleTypeScalarWhereWithAggregatesInput[]
    NOT?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleType"> | string
    name?: StringWithAggregatesFilter<"VehicleType"> | string
    max_passengers?: IntWithAggregatesFilter<"VehicleType"> | number
    max_luggage_standard?: IntWithAggregatesFilter<"VehicleType"> | number
    max_luggage_small?: IntWithAggregatesFilter<"VehicleType"> | number
  }

  export type RegionTranslationWhereInput = {
    AND?: RegionTranslationWhereInput | RegionTranslationWhereInput[]
    OR?: RegionTranslationWhereInput[]
    NOT?: RegionTranslationWhereInput | RegionTranslationWhereInput[]
    id?: StringFilter<"RegionTranslation"> | string
    region_id?: StringFilter<"RegionTranslation"> | string
    locale?: StringFilter<"RegionTranslation"> | string
    name?: StringFilter<"RegionTranslation"> | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
  }

  export type RegionTranslationOrderByWithRelationInput = {
    id?: SortOrder
    region_id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    region?: RegionOrderByWithRelationInput
  }

  export type RegionTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    region_id_locale?: RegionTranslationRegion_idLocaleCompoundUniqueInput
    AND?: RegionTranslationWhereInput | RegionTranslationWhereInput[]
    OR?: RegionTranslationWhereInput[]
    NOT?: RegionTranslationWhereInput | RegionTranslationWhereInput[]
    region_id?: StringFilter<"RegionTranslation"> | string
    locale?: StringFilter<"RegionTranslation"> | string
    name?: StringFilter<"RegionTranslation"> | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
  }, "id" | "region_id_locale">

  export type RegionTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    region_id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
    _count?: RegionTranslationCountOrderByAggregateInput
    _max?: RegionTranslationMaxOrderByAggregateInput
    _min?: RegionTranslationMinOrderByAggregateInput
  }

  export type RegionTranslationScalarWhereWithAggregatesInput = {
    AND?: RegionTranslationScalarWhereWithAggregatesInput | RegionTranslationScalarWhereWithAggregatesInput[]
    OR?: RegionTranslationScalarWhereWithAggregatesInput[]
    NOT?: RegionTranslationScalarWhereWithAggregatesInput | RegionTranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegionTranslation"> | string
    region_id?: StringWithAggregatesFilter<"RegionTranslation"> | string
    locale?: StringWithAggregatesFilter<"RegionTranslation"> | string
    name?: StringWithAggregatesFilter<"RegionTranslation"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverProfileCreateInput = {
    id?: string
    name?: string | null
    rating?: number
    status?: number
    user: UserCreateNestedOneWithoutDriverProfileInput
    region?: RegionCreateNestedOneWithoutDriversInput
    cars?: CarCreateNestedManyWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    orders?: OrderCreateNestedManyWithoutDriverInput
    ratings?: RatingCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    regionId?: string | null
    rating?: number
    status?: number
    cars?: CarUncheckedCreateNestedManyWithoutDriverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    orders?: OrderUncheckedCreateNestedManyWithoutDriverInput
    ratings?: RatingUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDriverProfileNestedInput
    region?: RegionUpdateOneWithoutDriversNestedInput
    cars?: CarUpdateManyWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    orders?: OrderUpdateManyWithoutDriverNestedInput
    ratings?: RatingUpdateManyWithoutDriverNestedInput
  }

  export type DriverProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    cars?: CarUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDriverNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverProfileCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
    regionId?: string | null
    rating?: number
    status?: number
  }

  export type DriverProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
  }

  export type DriverProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
  }

  export type AdminProfileCreateInput = {
    id?: string
    name?: string | null
    user: UserCreateNestedOneWithoutAdminProfileInput
    audit_logs?: AuditLogCreateNestedManyWithoutAdminInput
  }

  export type AdminProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAdminProfileNestedInput
    audit_logs?: AuditLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminProfileCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
  }

  export type AdminProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientProfileCreateInput = {
    id?: string
    name?: string | null
    user: UserCreateNestedOneWithoutClientProfileInput
    orders?: OrderCreateNestedManyWithoutClientInput
    ratings?: RatingCreateNestedManyWithoutClientInput
  }

  export type ClientProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutClientInput
    ratings?: RatingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutClientProfileNestedInput
    orders?: OrderUpdateManyWithoutClientNestedInput
    ratings?: RatingUpdateManyWithoutClientNestedInput
  }

  export type ClientProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutClientNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientProfileCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
  }

  export type ClientProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarCreateInput = {
    id?: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    driver: DriverProfileCreateNestedOneWithoutCarsInput
    vehicle_type: VehicleTypeCreateNestedOneWithoutCarsInput
    orders?: OrderCreateNestedManyWithoutCarInput
    media?: VehicleMediaCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: string
    driverId: string
    vehicle_type_id: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    orders?: OrderUncheckedCreateNestedManyWithoutCarInput
    media?: VehicleMediaUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    driver?: DriverProfileUpdateOneRequiredWithoutCarsNestedInput
    vehicle_type?: VehicleTypeUpdateOneRequiredWithoutCarsNestedInput
    orders?: OrderUpdateManyWithoutCarNestedInput
    media?: VehicleMediaUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicle_type_id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    orders?: OrderUncheckedUpdateManyWithoutCarNestedInput
    media?: VehicleMediaUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: string
    driverId: string
    vehicle_type_id: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
  }

  export type CarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
  }

  export type CarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicle_type_id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
  }

  export type VehicleMediaCreateInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
    car: CarCreateNestedOneWithoutMediaInput
  }

  export type VehicleMediaUncheckedCreateInput = {
    id?: string
    carId: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type VehicleMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutMediaNestedInput
  }

  export type VehicleMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleMediaCreateManyInput = {
    id?: string
    carId: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type VehicleMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    client?: ClientProfileCreateNestedOneWithoutOrdersInput
    region?: RegionCreateNestedOneWithoutOrdersInput
    driver?: DriverProfileCreateNestedOneWithoutOrdersInput
    car?: CarCreateNestedOneWithoutOrdersInput
    rating?: RatingCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    clientId?: string | null
    regionId?: string | null
    driverId?: string | null
    car_id?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    rating?: RatingUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientProfileUpdateOneWithoutOrdersNestedInput
    region?: RegionUpdateOneWithoutOrdersNestedInput
    driver?: DriverProfileUpdateOneWithoutOrdersNestedInput
    car?: CarUpdateOneWithoutOrdersNestedInput
    rating?: RatingUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: RatingUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    clientId?: string | null
    regionId?: string | null
    driverId?: string | null
    car_id?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingCreateInput = {
    id?: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutRatingInput
    driver: DriverProfileCreateNestedOneWithoutRatingsInput
    client: ClientProfileCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    order_id: string
    driverId: string
    clientId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutRatingNestedInput
    driver?: DriverProfileUpdateOneRequiredWithoutRatingsNestedInput
    client?: ClientProfileUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    id?: string
    order_id: string
    driverId: string
    clientId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    type: $Enums.DocumentType
    file_url: string
    status?: $Enums.DocumentStatus
    expires_at?: Date | string | null
    driver: DriverProfileCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    driverId: string
    type: $Enums.DocumentType
    file_url: string
    status?: $Enums.DocumentStatus
    expires_at?: Date | string | null
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    file_url?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driver?: DriverProfileUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    file_url?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCreateManyInput = {
    id?: string
    driverId: string
    type: $Enums.DocumentType
    file_url: string
    status?: $Enums.DocumentStatus
    expires_at?: Date | string | null
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    file_url?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    file_url?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    target_entity?: string | null
    target_id?: string | null
    created_at?: Date | string
    admin: AdminProfileCreateNestedOneWithoutAudit_logsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    adminId: string
    action: string
    target_entity?: string | null
    target_id?: string | null
    created_at?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_entity?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminProfileUpdateOneRequiredWithoutAudit_logsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_entity?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    adminId: string
    action: string
    target_entity?: string | null
    target_id?: string | null
    created_at?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_entity?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_entity?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionCreateInput = {
    id?: string
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    parent?: RegionCreateNestedOneWithoutChildrenInput
    children?: RegionCreateNestedManyWithoutParentInput
    drivers?: DriverProfileCreateNestedManyWithoutRegionInput
    translations?: RegionTranslationCreateNestedManyWithoutRegionInput
    orders?: OrderCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: string
    parent_id?: string | null
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    children?: RegionUncheckedCreateNestedManyWithoutParentInput
    drivers?: DriverProfileUncheckedCreateNestedManyWithoutRegionInput
    translations?: RegionTranslationUncheckedCreateNestedManyWithoutRegionInput
    orders?: OrderUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parent?: RegionUpdateOneWithoutChildrenNestedInput
    children?: RegionUpdateManyWithoutParentNestedInput
    drivers?: DriverProfileUpdateManyWithoutRegionNestedInput
    translations?: RegionTranslationUpdateManyWithoutRegionNestedInput
    orders?: OrderUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    children?: RegionUncheckedUpdateManyWithoutParentNestedInput
    drivers?: DriverProfileUncheckedUpdateManyWithoutRegionNestedInput
    translations?: RegionTranslationUncheckedUpdateManyWithoutRegionNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: string
    parent_id?: string | null
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
  }

  export type RegionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type VehicleTypeCreateInput = {
    id?: string
    name: string
    max_passengers: number
    max_luggage_standard: number
    max_luggage_small: number
    cars?: CarCreateNestedManyWithoutVehicle_typeInput
  }

  export type VehicleTypeUncheckedCreateInput = {
    id?: string
    name: string
    max_passengers: number
    max_luggage_standard: number
    max_luggage_small: number
    cars?: CarUncheckedCreateNestedManyWithoutVehicle_typeInput
  }

  export type VehicleTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    max_luggage_standard?: IntFieldUpdateOperationsInput | number
    max_luggage_small?: IntFieldUpdateOperationsInput | number
    cars?: CarUpdateManyWithoutVehicle_typeNestedInput
  }

  export type VehicleTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    max_luggage_standard?: IntFieldUpdateOperationsInput | number
    max_luggage_small?: IntFieldUpdateOperationsInput | number
    cars?: CarUncheckedUpdateManyWithoutVehicle_typeNestedInput
  }

  export type VehicleTypeCreateManyInput = {
    id?: string
    name: string
    max_passengers: number
    max_luggage_standard: number
    max_luggage_small: number
  }

  export type VehicleTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    max_luggage_standard?: IntFieldUpdateOperationsInput | number
    max_luggage_small?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    max_luggage_standard?: IntFieldUpdateOperationsInput | number
    max_luggage_small?: IntFieldUpdateOperationsInput | number
  }

  export type RegionTranslationCreateInput = {
    id?: string
    locale: string
    name: string
    region: RegionCreateNestedOneWithoutTranslationsInput
  }

  export type RegionTranslationUncheckedCreateInput = {
    id?: string
    region_id: string
    locale: string
    name: string
  }

  export type RegionTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type RegionTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    region_id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionTranslationCreateManyInput = {
    id?: string
    region_id: string
    locale: string
    name: string
  }

  export type RegionTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    region_id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type DriverProfileNullableScalarRelationFilter = {
    is?: DriverProfileWhereInput | null
    isNot?: DriverProfileWhereInput | null
  }

  export type AdminProfileNullableScalarRelationFilter = {
    is?: AdminProfileWhereInput | null
    isNot?: AdminProfileWhereInput | null
  }

  export type ClientProfileNullableScalarRelationFilter = {
    is?: ClientProfileWhereInput | null
    isNot?: ClientProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RegionNullableScalarRelationFilter = {
    is?: RegionWhereInput | null
    isNot?: RegionWhereInput | null
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
    rating?: SortOrder
    status?: SortOrder
  }

  export type DriverProfileAvgOrderByAggregateInput = {
    rating?: SortOrder
    status?: SortOrder
  }

  export type DriverProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
    rating?: SortOrder
    status?: SortOrder
  }

  export type DriverProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
    rating?: SortOrder
    status?: SortOrder
  }

  export type DriverProfileSumOrderByAggregateInput = {
    rating?: SortOrder
    status?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type AdminProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type AdminProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type ClientProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type ClientProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type ClientProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type EnumVehicleVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleVerificationStatus | EnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleVerificationStatus[] | ListEnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleVerificationStatus[] | ListEnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleVerificationStatusFilter<$PrismaModel> | $Enums.VehicleVerificationStatus
  }

  export type DriverProfileScalarRelationFilter = {
    is?: DriverProfileWhereInput
    isNot?: DriverProfileWhereInput
  }

  export type VehicleTypeScalarRelationFilter = {
    is?: VehicleTypeWhereInput
    isNot?: VehicleTypeWhereInput
  }

  export type VehicleMediaListRelationFilter = {
    every?: VehicleMediaWhereInput
    some?: VehicleMediaWhereInput
    none?: VehicleMediaWhereInput
  }

  export type VehicleMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicle_type_id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    license_plate?: SortOrder
    verification_status?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicle_type_id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    license_plate?: SortOrder
    verification_status?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicle_type_id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    license_plate?: SortOrder
    verification_status?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type EnumVehicleVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleVerificationStatus | EnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleVerificationStatus[] | ListEnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleVerificationStatus[] | ListEnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleVerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleVerificationStatusFilter<$PrismaModel>
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type VehicleMediaCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleMediaMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type CarNullableScalarRelationFilter = {
    is?: CarWhereInput | null
    isNot?: CarWhereInput | null
  }

  export type RatingNullableScalarRelationFilter = {
    is?: RatingWhereInput | null
    isNot?: RatingWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    regionId?: SortOrder
    driverId?: SortOrder
    car_id?: SortOrder
    name?: SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    distance?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    trip_datetime?: SortOrder
    notes?: SortOrder
    passenger_count?: SortOrder
    flight_number?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    distance?: SortOrder
    price?: SortOrder
    passenger_count?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    regionId?: SortOrder
    driverId?: SortOrder
    car_id?: SortOrder
    name?: SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    distance?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    trip_datetime?: SortOrder
    notes?: SortOrder
    passenger_count?: SortOrder
    flight_number?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    regionId?: SortOrder
    driverId?: SortOrder
    car_id?: SortOrder
    name?: SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    distance?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    trip_datetime?: SortOrder
    notes?: SortOrder
    passenger_count?: SortOrder
    flight_number?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    distance?: SortOrder
    price?: SortOrder
    passenger_count?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ClientProfileScalarRelationFilter = {
    is?: ClientProfileWhereInput
    isNot?: ClientProfileWhereInput
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    driverId?: SortOrder
    clientId?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    driverId?: SortOrder
    clientId?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    driverId?: SortOrder
    clientId?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
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

  export type DocumentDriverIdTypeCompoundUniqueInput = {
    driverId: string
    type: $Enums.DocumentType
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    file_url?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    file_url?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    file_url?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
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

  export type AdminProfileScalarRelationFilter = {
    is?: AdminProfileWhereInput
    isNot?: AdminProfileWhereInput
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    target_entity?: SortOrder
    target_id?: SortOrder
    created_at?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    target_entity?: SortOrder
    target_id?: SortOrder
    created_at?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    target_entity?: SortOrder
    target_id?: SortOrder
    created_at?: SortOrder
  }

  export type EnumRegionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RegionType | EnumRegionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RegionType[] | ListEnumRegionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegionType[] | ListEnumRegionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRegionTypeFilter<$PrismaModel> | $Enums.RegionType
  }

  export type RegionListRelationFilter = {
    every?: RegionWhereInput
    some?: RegionWhereInput
    none?: RegionWhereInput
  }

  export type DriverProfileListRelationFilter = {
    every?: DriverProfileWhereInput
    some?: DriverProfileWhereInput
    none?: DriverProfileWhereInput
  }

  export type RegionTranslationListRelationFilter = {
    every?: RegionTranslationWhereInput
    some?: RegionTranslationWhereInput
    none?: RegionTranslationWhereInput
  }

  export type RegionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumRegionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegionType | EnumRegionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RegionType[] | ListEnumRegionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegionType[] | ListEnumRegionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRegionTypeWithAggregatesFilter<$PrismaModel> | $Enums.RegionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegionTypeFilter<$PrismaModel>
    _max?: NestedEnumRegionTypeFilter<$PrismaModel>
  }

  export type VehicleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    max_passengers?: SortOrder
    max_luggage_standard?: SortOrder
    max_luggage_small?: SortOrder
  }

  export type VehicleTypeAvgOrderByAggregateInput = {
    max_passengers?: SortOrder
    max_luggage_standard?: SortOrder
    max_luggage_small?: SortOrder
  }

  export type VehicleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    max_passengers?: SortOrder
    max_luggage_standard?: SortOrder
    max_luggage_small?: SortOrder
  }

  export type VehicleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    max_passengers?: SortOrder
    max_luggage_standard?: SortOrder
    max_luggage_small?: SortOrder
  }

  export type VehicleTypeSumOrderByAggregateInput = {
    max_passengers?: SortOrder
    max_luggage_standard?: SortOrder
    max_luggage_small?: SortOrder
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type RegionTranslationRegion_idLocaleCompoundUniqueInput = {
    region_id: string
    locale: string
  }

  export type RegionTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    region_id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
  }

  export type RegionTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    region_id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
  }

  export type RegionTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    region_id?: SortOrder
    locale?: SortOrder
    name?: SortOrder
  }

  export type DriverProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutUserInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type AdminProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutUserInput
    connect?: AdminProfileWhereUniqueInput
  }

  export type ClientProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput
    connect?: ClientProfileWhereUniqueInput
  }

  export type DriverProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutUserInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type AdminProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutUserInput
    connect?: AdminProfileWhereUniqueInput
  }

  export type ClientProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput
    connect?: ClientProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DriverProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutUserInput
    upsert?: DriverProfileUpsertWithoutUserInput
    disconnect?: DriverProfileWhereInput | boolean
    delete?: DriverProfileWhereInput | boolean
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutUserInput, DriverProfileUpdateWithoutUserInput>, DriverProfileUncheckedUpdateWithoutUserInput>
  }

  export type AdminProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutUserInput
    upsert?: AdminProfileUpsertWithoutUserInput
    disconnect?: AdminProfileWhereInput | boolean
    delete?: AdminProfileWhereInput | boolean
    connect?: AdminProfileWhereUniqueInput
    update?: XOR<XOR<AdminProfileUpdateToOneWithWhereWithoutUserInput, AdminProfileUpdateWithoutUserInput>, AdminProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClientProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput
    upsert?: ClientProfileUpsertWithoutUserInput
    disconnect?: ClientProfileWhereInput | boolean
    delete?: ClientProfileWhereInput | boolean
    connect?: ClientProfileWhereUniqueInput
    update?: XOR<XOR<ClientProfileUpdateToOneWithWhereWithoutUserInput, ClientProfileUpdateWithoutUserInput>, ClientProfileUncheckedUpdateWithoutUserInput>
  }

  export type DriverProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutUserInput
    upsert?: DriverProfileUpsertWithoutUserInput
    disconnect?: DriverProfileWhereInput | boolean
    delete?: DriverProfileWhereInput | boolean
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutUserInput, DriverProfileUpdateWithoutUserInput>, DriverProfileUncheckedUpdateWithoutUserInput>
  }

  export type AdminProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutUserInput
    upsert?: AdminProfileUpsertWithoutUserInput
    disconnect?: AdminProfileWhereInput | boolean
    delete?: AdminProfileWhereInput | boolean
    connect?: AdminProfileWhereUniqueInput
    update?: XOR<XOR<AdminProfileUpdateToOneWithWhereWithoutUserInput, AdminProfileUpdateWithoutUserInput>, AdminProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClientProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput
    upsert?: ClientProfileUpsertWithoutUserInput
    disconnect?: ClientProfileWhereInput | boolean
    delete?: ClientProfileWhereInput | boolean
    connect?: ClientProfileWhereUniqueInput
    update?: XOR<XOR<ClientProfileUpdateToOneWithWhereWithoutUserInput, ClientProfileUpdateWithoutUserInput>, ClientProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutDriverProfileInput = {
    create?: XOR<UserCreateWithoutDriverProfileInput, UserUncheckedCreateWithoutDriverProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverProfileInput
    connect?: UserWhereUniqueInput
  }

  export type RegionCreateNestedOneWithoutDriversInput = {
    create?: XOR<RegionCreateWithoutDriversInput, RegionUncheckedCreateWithoutDriversInput>
    connectOrCreate?: RegionCreateOrConnectWithoutDriversInput
    connect?: RegionWhereUniqueInput
  }

  export type CarCreateNestedManyWithoutDriverInput = {
    create?: XOR<CarCreateWithoutDriverInput, CarUncheckedCreateWithoutDriverInput> | CarCreateWithoutDriverInput[] | CarUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: CarCreateOrConnectWithoutDriverInput | CarCreateOrConnectWithoutDriverInput[]
    createMany?: CarCreateManyDriverInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutDriverInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutDriverInput = {
    create?: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput> | OrderCreateWithoutDriverInput[] | OrderUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDriverInput | OrderCreateOrConnectWithoutDriverInput[]
    createMany?: OrderCreateManyDriverInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutDriverInput = {
    create?: XOR<RatingCreateWithoutDriverInput, RatingUncheckedCreateWithoutDriverInput> | RatingCreateWithoutDriverInput[] | RatingUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutDriverInput | RatingCreateOrConnectWithoutDriverInput[]
    createMany?: RatingCreateManyDriverInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<CarCreateWithoutDriverInput, CarUncheckedCreateWithoutDriverInput> | CarCreateWithoutDriverInput[] | CarUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: CarCreateOrConnectWithoutDriverInput | CarCreateOrConnectWithoutDriverInput[]
    createMany?: CarCreateManyDriverInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput> | OrderCreateWithoutDriverInput[] | OrderUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDriverInput | OrderCreateOrConnectWithoutDriverInput[]
    createMany?: OrderCreateManyDriverInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<RatingCreateWithoutDriverInput, RatingUncheckedCreateWithoutDriverInput> | RatingCreateWithoutDriverInput[] | RatingUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutDriverInput | RatingCreateOrConnectWithoutDriverInput[]
    createMany?: RatingCreateManyDriverInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDriverProfileNestedInput = {
    create?: XOR<UserCreateWithoutDriverProfileInput, UserUncheckedCreateWithoutDriverProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverProfileInput
    upsert?: UserUpsertWithoutDriverProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDriverProfileInput, UserUpdateWithoutDriverProfileInput>, UserUncheckedUpdateWithoutDriverProfileInput>
  }

  export type RegionUpdateOneWithoutDriversNestedInput = {
    create?: XOR<RegionCreateWithoutDriversInput, RegionUncheckedCreateWithoutDriversInput>
    connectOrCreate?: RegionCreateOrConnectWithoutDriversInput
    upsert?: RegionUpsertWithoutDriversInput
    disconnect?: RegionWhereInput | boolean
    delete?: RegionWhereInput | boolean
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutDriversInput, RegionUpdateWithoutDriversInput>, RegionUncheckedUpdateWithoutDriversInput>
  }

  export type CarUpdateManyWithoutDriverNestedInput = {
    create?: XOR<CarCreateWithoutDriverInput, CarUncheckedCreateWithoutDriverInput> | CarCreateWithoutDriverInput[] | CarUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: CarCreateOrConnectWithoutDriverInput | CarCreateOrConnectWithoutDriverInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutDriverInput | CarUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: CarCreateManyDriverInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutDriverInput | CarUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: CarUpdateManyWithWhereWithoutDriverInput | CarUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDriverInput | DocumentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDriverInput | DocumentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDriverInput | DocumentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutDriverNestedInput = {
    create?: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput> | OrderCreateWithoutDriverInput[] | OrderUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDriverInput | OrderCreateOrConnectWithoutDriverInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDriverInput | OrderUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: OrderCreateManyDriverInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDriverInput | OrderUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDriverInput | OrderUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RatingCreateWithoutDriverInput, RatingUncheckedCreateWithoutDriverInput> | RatingCreateWithoutDriverInput[] | RatingUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutDriverInput | RatingCreateOrConnectWithoutDriverInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutDriverInput | RatingUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RatingCreateManyDriverInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutDriverInput | RatingUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutDriverInput | RatingUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<CarCreateWithoutDriverInput, CarUncheckedCreateWithoutDriverInput> | CarCreateWithoutDriverInput[] | CarUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: CarCreateOrConnectWithoutDriverInput | CarCreateOrConnectWithoutDriverInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutDriverInput | CarUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: CarCreateManyDriverInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutDriverInput | CarUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: CarUpdateManyWithWhereWithoutDriverInput | CarUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDriverInput | DocumentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDriverInput | DocumentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDriverInput | DocumentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput> | OrderCreateWithoutDriverInput[] | OrderUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDriverInput | OrderCreateOrConnectWithoutDriverInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDriverInput | OrderUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: OrderCreateManyDriverInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDriverInput | OrderUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDriverInput | OrderUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RatingCreateWithoutDriverInput, RatingUncheckedCreateWithoutDriverInput> | RatingCreateWithoutDriverInput[] | RatingUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutDriverInput | RatingCreateOrConnectWithoutDriverInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutDriverInput | RatingUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RatingCreateManyDriverInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutDriverInput | RatingUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutDriverInput | RatingUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminProfileInput = {
    create?: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AuditLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAdminProfileNestedInput = {
    create?: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminProfileInput
    upsert?: UserUpsertWithoutAdminProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminProfileInput, UserUpdateWithoutAdminProfileInput>, UserUncheckedUpdateWithoutAdminProfileInput>
  }

  export type AuditLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutAdminInput | AuditLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutAdminInput | AuditLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutAdminInput | AuditLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutAdminInput | AuditLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutAdminInput | AuditLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutAdminInput | AuditLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientProfileInput = {
    create?: XOR<UserCreateWithoutClientProfileInput, UserUncheckedCreateWithoutClientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientProfileInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutClientInput = {
    create?: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput> | RatingCreateWithoutClientInput[] | RatingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutClientInput | RatingCreateOrConnectWithoutClientInput[]
    createMany?: RatingCreateManyClientInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput> | RatingCreateWithoutClientInput[] | RatingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutClientInput | RatingCreateOrConnectWithoutClientInput[]
    createMany?: RatingCreateManyClientInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClientProfileNestedInput = {
    create?: XOR<UserCreateWithoutClientProfileInput, UserUncheckedCreateWithoutClientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientProfileInput
    upsert?: UserUpsertWithoutClientProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientProfileInput, UserUpdateWithoutClientProfileInput>, UserUncheckedUpdateWithoutClientProfileInput>
  }

  export type OrderUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutClientNestedInput = {
    create?: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput> | RatingCreateWithoutClientInput[] | RatingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutClientInput | RatingCreateOrConnectWithoutClientInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutClientInput | RatingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RatingCreateManyClientInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutClientInput | RatingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutClientInput | RatingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput> | RatingCreateWithoutClientInput[] | RatingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutClientInput | RatingCreateOrConnectWithoutClientInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutClientInput | RatingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RatingCreateManyClientInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutClientInput | RatingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutClientInput | RatingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type DriverProfileCreateNestedOneWithoutCarsInput = {
    create?: XOR<DriverProfileCreateWithoutCarsInput, DriverProfileUncheckedCreateWithoutCarsInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutCarsInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type VehicleTypeCreateNestedOneWithoutCarsInput = {
    create?: XOR<VehicleTypeCreateWithoutCarsInput, VehicleTypeUncheckedCreateWithoutCarsInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutCarsInput
    connect?: VehicleTypeWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutCarInput = {
    create?: XOR<OrderCreateWithoutCarInput, OrderUncheckedCreateWithoutCarInput> | OrderCreateWithoutCarInput[] | OrderUncheckedCreateWithoutCarInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCarInput | OrderCreateOrConnectWithoutCarInput[]
    createMany?: OrderCreateManyCarInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type VehicleMediaCreateNestedManyWithoutCarInput = {
    create?: XOR<VehicleMediaCreateWithoutCarInput, VehicleMediaUncheckedCreateWithoutCarInput> | VehicleMediaCreateWithoutCarInput[] | VehicleMediaUncheckedCreateWithoutCarInput[]
    connectOrCreate?: VehicleMediaCreateOrConnectWithoutCarInput | VehicleMediaCreateOrConnectWithoutCarInput[]
    createMany?: VehicleMediaCreateManyCarInputEnvelope
    connect?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<OrderCreateWithoutCarInput, OrderUncheckedCreateWithoutCarInput> | OrderCreateWithoutCarInput[] | OrderUncheckedCreateWithoutCarInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCarInput | OrderCreateOrConnectWithoutCarInput[]
    createMany?: OrderCreateManyCarInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type VehicleMediaUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<VehicleMediaCreateWithoutCarInput, VehicleMediaUncheckedCreateWithoutCarInput> | VehicleMediaCreateWithoutCarInput[] | VehicleMediaUncheckedCreateWithoutCarInput[]
    connectOrCreate?: VehicleMediaCreateOrConnectWithoutCarInput | VehicleMediaCreateOrConnectWithoutCarInput[]
    createMany?: VehicleMediaCreateManyCarInputEnvelope
    connect?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
  }

  export type EnumVehicleVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleVerificationStatus
  }

  export type DriverProfileUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<DriverProfileCreateWithoutCarsInput, DriverProfileUncheckedCreateWithoutCarsInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutCarsInput
    upsert?: DriverProfileUpsertWithoutCarsInput
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutCarsInput, DriverProfileUpdateWithoutCarsInput>, DriverProfileUncheckedUpdateWithoutCarsInput>
  }

  export type VehicleTypeUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<VehicleTypeCreateWithoutCarsInput, VehicleTypeUncheckedCreateWithoutCarsInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutCarsInput
    upsert?: VehicleTypeUpsertWithoutCarsInput
    connect?: VehicleTypeWhereUniqueInput
    update?: XOR<XOR<VehicleTypeUpdateToOneWithWhereWithoutCarsInput, VehicleTypeUpdateWithoutCarsInput>, VehicleTypeUncheckedUpdateWithoutCarsInput>
  }

  export type OrderUpdateManyWithoutCarNestedInput = {
    create?: XOR<OrderCreateWithoutCarInput, OrderUncheckedCreateWithoutCarInput> | OrderCreateWithoutCarInput[] | OrderUncheckedCreateWithoutCarInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCarInput | OrderCreateOrConnectWithoutCarInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCarInput | OrderUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: OrderCreateManyCarInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCarInput | OrderUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCarInput | OrderUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VehicleMediaUpdateManyWithoutCarNestedInput = {
    create?: XOR<VehicleMediaCreateWithoutCarInput, VehicleMediaUncheckedCreateWithoutCarInput> | VehicleMediaCreateWithoutCarInput[] | VehicleMediaUncheckedCreateWithoutCarInput[]
    connectOrCreate?: VehicleMediaCreateOrConnectWithoutCarInput | VehicleMediaCreateOrConnectWithoutCarInput[]
    upsert?: VehicleMediaUpsertWithWhereUniqueWithoutCarInput | VehicleMediaUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: VehicleMediaCreateManyCarInputEnvelope
    set?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
    disconnect?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
    delete?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
    connect?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
    update?: VehicleMediaUpdateWithWhereUniqueWithoutCarInput | VehicleMediaUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: VehicleMediaUpdateManyWithWhereWithoutCarInput | VehicleMediaUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: VehicleMediaScalarWhereInput | VehicleMediaScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<OrderCreateWithoutCarInput, OrderUncheckedCreateWithoutCarInput> | OrderCreateWithoutCarInput[] | OrderUncheckedCreateWithoutCarInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCarInput | OrderCreateOrConnectWithoutCarInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCarInput | OrderUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: OrderCreateManyCarInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCarInput | OrderUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCarInput | OrderUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VehicleMediaUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<VehicleMediaCreateWithoutCarInput, VehicleMediaUncheckedCreateWithoutCarInput> | VehicleMediaCreateWithoutCarInput[] | VehicleMediaUncheckedCreateWithoutCarInput[]
    connectOrCreate?: VehicleMediaCreateOrConnectWithoutCarInput | VehicleMediaCreateOrConnectWithoutCarInput[]
    upsert?: VehicleMediaUpsertWithWhereUniqueWithoutCarInput | VehicleMediaUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: VehicleMediaCreateManyCarInputEnvelope
    set?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
    disconnect?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
    delete?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
    connect?: VehicleMediaWhereUniqueInput | VehicleMediaWhereUniqueInput[]
    update?: VehicleMediaUpdateWithWhereUniqueWithoutCarInput | VehicleMediaUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: VehicleMediaUpdateManyWithWhereWithoutCarInput | VehicleMediaUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: VehicleMediaScalarWhereInput | VehicleMediaScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutMediaInput = {
    create?: XOR<CarCreateWithoutMediaInput, CarUncheckedCreateWithoutMediaInput>
    connectOrCreate?: CarCreateOrConnectWithoutMediaInput
    connect?: CarWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type CarUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<CarCreateWithoutMediaInput, CarUncheckedCreateWithoutMediaInput>
    connectOrCreate?: CarCreateOrConnectWithoutMediaInput
    upsert?: CarUpsertWithoutMediaInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutMediaInput, CarUpdateWithoutMediaInput>, CarUncheckedUpdateWithoutMediaInput>
  }

  export type ClientProfileCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ClientProfileCreateWithoutOrdersInput, ClientProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutOrdersInput
    connect?: ClientProfileWhereUniqueInput
  }

  export type RegionCreateNestedOneWithoutOrdersInput = {
    create?: XOR<RegionCreateWithoutOrdersInput, RegionUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RegionCreateOrConnectWithoutOrdersInput
    connect?: RegionWhereUniqueInput
  }

  export type DriverProfileCreateNestedOneWithoutOrdersInput = {
    create?: XOR<DriverProfileCreateWithoutOrdersInput, DriverProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutOrdersInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CarCreateWithoutOrdersInput, CarUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CarCreateOrConnectWithoutOrdersInput
    connect?: CarWhereUniqueInput
  }

  export type RatingCreateNestedOneWithoutOrderInput = {
    create?: XOR<RatingCreateWithoutOrderInput, RatingUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RatingCreateOrConnectWithoutOrderInput
    connect?: RatingWhereUniqueInput
  }

  export type RatingUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<RatingCreateWithoutOrderInput, RatingUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RatingCreateOrConnectWithoutOrderInput
    connect?: RatingWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type ClientProfileUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ClientProfileCreateWithoutOrdersInput, ClientProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutOrdersInput
    upsert?: ClientProfileUpsertWithoutOrdersInput
    disconnect?: ClientProfileWhereInput | boolean
    delete?: ClientProfileWhereInput | boolean
    connect?: ClientProfileWhereUniqueInput
    update?: XOR<XOR<ClientProfileUpdateToOneWithWhereWithoutOrdersInput, ClientProfileUpdateWithoutOrdersInput>, ClientProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type RegionUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<RegionCreateWithoutOrdersInput, RegionUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RegionCreateOrConnectWithoutOrdersInput
    upsert?: RegionUpsertWithoutOrdersInput
    disconnect?: RegionWhereInput | boolean
    delete?: RegionWhereInput | boolean
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutOrdersInput, RegionUpdateWithoutOrdersInput>, RegionUncheckedUpdateWithoutOrdersInput>
  }

  export type DriverProfileUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<DriverProfileCreateWithoutOrdersInput, DriverProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutOrdersInput
    upsert?: DriverProfileUpsertWithoutOrdersInput
    disconnect?: DriverProfileWhereInput | boolean
    delete?: DriverProfileWhereInput | boolean
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutOrdersInput, DriverProfileUpdateWithoutOrdersInput>, DriverProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type CarUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<CarCreateWithoutOrdersInput, CarUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CarCreateOrConnectWithoutOrdersInput
    upsert?: CarUpsertWithoutOrdersInput
    disconnect?: CarWhereInput | boolean
    delete?: CarWhereInput | boolean
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutOrdersInput, CarUpdateWithoutOrdersInput>, CarUncheckedUpdateWithoutOrdersInput>
  }

  export type RatingUpdateOneWithoutOrderNestedInput = {
    create?: XOR<RatingCreateWithoutOrderInput, RatingUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RatingCreateOrConnectWithoutOrderInput
    upsert?: RatingUpsertWithoutOrderInput
    disconnect?: RatingWhereInput | boolean
    delete?: RatingWhereInput | boolean
    connect?: RatingWhereUniqueInput
    update?: XOR<XOR<RatingUpdateToOneWithWhereWithoutOrderInput, RatingUpdateWithoutOrderInput>, RatingUncheckedUpdateWithoutOrderInput>
  }

  export type RatingUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<RatingCreateWithoutOrderInput, RatingUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RatingCreateOrConnectWithoutOrderInput
    upsert?: RatingUpsertWithoutOrderInput
    disconnect?: RatingWhereInput | boolean
    delete?: RatingWhereInput | boolean
    connect?: RatingWhereUniqueInput
    update?: XOR<XOR<RatingUpdateToOneWithWhereWithoutOrderInput, RatingUpdateWithoutOrderInput>, RatingUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutRatingInput = {
    create?: XOR<OrderCreateWithoutRatingInput, OrderUncheckedCreateWithoutRatingInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRatingInput
    connect?: OrderWhereUniqueInput
  }

  export type DriverProfileCreateNestedOneWithoutRatingsInput = {
    create?: XOR<DriverProfileCreateWithoutRatingsInput, DriverProfileUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutRatingsInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type ClientProfileCreateNestedOneWithoutRatingsInput = {
    create?: XOR<ClientProfileCreateWithoutRatingsInput, ClientProfileUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutRatingsInput
    connect?: ClientProfileWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutRatingNestedInput = {
    create?: XOR<OrderCreateWithoutRatingInput, OrderUncheckedCreateWithoutRatingInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRatingInput
    upsert?: OrderUpsertWithoutRatingInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutRatingInput, OrderUpdateWithoutRatingInput>, OrderUncheckedUpdateWithoutRatingInput>
  }

  export type DriverProfileUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<DriverProfileCreateWithoutRatingsInput, DriverProfileUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutRatingsInput
    upsert?: DriverProfileUpsertWithoutRatingsInput
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutRatingsInput, DriverProfileUpdateWithoutRatingsInput>, DriverProfileUncheckedUpdateWithoutRatingsInput>
  }

  export type ClientProfileUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<ClientProfileCreateWithoutRatingsInput, ClientProfileUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutRatingsInput
    upsert?: ClientProfileUpsertWithoutRatingsInput
    connect?: ClientProfileWhereUniqueInput
    update?: XOR<XOR<ClientProfileUpdateToOneWithWhereWithoutRatingsInput, ClientProfileUpdateWithoutRatingsInput>, ClientProfileUncheckedUpdateWithoutRatingsInput>
  }

  export type DriverProfileCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DriverProfileCreateWithoutDocumentsInput, DriverProfileUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutDocumentsInput
    connect?: DriverProfileWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DriverProfileUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DriverProfileCreateWithoutDocumentsInput, DriverProfileUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DriverProfileCreateOrConnectWithoutDocumentsInput
    upsert?: DriverProfileUpsertWithoutDocumentsInput
    connect?: DriverProfileWhereUniqueInput
    update?: XOR<XOR<DriverProfileUpdateToOneWithWhereWithoutDocumentsInput, DriverProfileUpdateWithoutDocumentsInput>, DriverProfileUncheckedUpdateWithoutDocumentsInput>
  }

  export type AdminProfileCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<AdminProfileCreateWithoutAudit_logsInput, AdminProfileUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutAudit_logsInput
    connect?: AdminProfileWhereUniqueInput
  }

  export type AdminProfileUpdateOneRequiredWithoutAudit_logsNestedInput = {
    create?: XOR<AdminProfileCreateWithoutAudit_logsInput, AdminProfileUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutAudit_logsInput
    upsert?: AdminProfileUpsertWithoutAudit_logsInput
    connect?: AdminProfileWhereUniqueInput
    update?: XOR<XOR<AdminProfileUpdateToOneWithWhereWithoutAudit_logsInput, AdminProfileUpdateWithoutAudit_logsInput>, AdminProfileUncheckedUpdateWithoutAudit_logsInput>
  }

  export type RegionCreateNestedOneWithoutChildrenInput = {
    create?: XOR<RegionCreateWithoutChildrenInput, RegionUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: RegionCreateOrConnectWithoutChildrenInput
    connect?: RegionWhereUniqueInput
  }

  export type RegionCreateNestedManyWithoutParentInput = {
    create?: XOR<RegionCreateWithoutParentInput, RegionUncheckedCreateWithoutParentInput> | RegionCreateWithoutParentInput[] | RegionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutParentInput | RegionCreateOrConnectWithoutParentInput[]
    createMany?: RegionCreateManyParentInputEnvelope
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
  }

  export type DriverProfileCreateNestedManyWithoutRegionInput = {
    create?: XOR<DriverProfileCreateWithoutRegionInput, DriverProfileUncheckedCreateWithoutRegionInput> | DriverProfileCreateWithoutRegionInput[] | DriverProfileUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: DriverProfileCreateOrConnectWithoutRegionInput | DriverProfileCreateOrConnectWithoutRegionInput[]
    createMany?: DriverProfileCreateManyRegionInputEnvelope
    connect?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
  }

  export type RegionTranslationCreateNestedManyWithoutRegionInput = {
    create?: XOR<RegionTranslationCreateWithoutRegionInput, RegionTranslationUncheckedCreateWithoutRegionInput> | RegionTranslationCreateWithoutRegionInput[] | RegionTranslationUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: RegionTranslationCreateOrConnectWithoutRegionInput | RegionTranslationCreateOrConnectWithoutRegionInput[]
    createMany?: RegionTranslationCreateManyRegionInputEnvelope
    connect?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutRegionInput = {
    create?: XOR<OrderCreateWithoutRegionInput, OrderUncheckedCreateWithoutRegionInput> | OrderCreateWithoutRegionInput[] | OrderUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRegionInput | OrderCreateOrConnectWithoutRegionInput[]
    createMany?: OrderCreateManyRegionInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RegionUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<RegionCreateWithoutParentInput, RegionUncheckedCreateWithoutParentInput> | RegionCreateWithoutParentInput[] | RegionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutParentInput | RegionCreateOrConnectWithoutParentInput[]
    createMany?: RegionCreateManyParentInputEnvelope
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
  }

  export type DriverProfileUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<DriverProfileCreateWithoutRegionInput, DriverProfileUncheckedCreateWithoutRegionInput> | DriverProfileCreateWithoutRegionInput[] | DriverProfileUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: DriverProfileCreateOrConnectWithoutRegionInput | DriverProfileCreateOrConnectWithoutRegionInput[]
    createMany?: DriverProfileCreateManyRegionInputEnvelope
    connect?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
  }

  export type RegionTranslationUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<RegionTranslationCreateWithoutRegionInput, RegionTranslationUncheckedCreateWithoutRegionInput> | RegionTranslationCreateWithoutRegionInput[] | RegionTranslationUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: RegionTranslationCreateOrConnectWithoutRegionInput | RegionTranslationCreateOrConnectWithoutRegionInput[]
    createMany?: RegionTranslationCreateManyRegionInputEnvelope
    connect?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<OrderCreateWithoutRegionInput, OrderUncheckedCreateWithoutRegionInput> | OrderCreateWithoutRegionInput[] | OrderUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRegionInput | OrderCreateOrConnectWithoutRegionInput[]
    createMany?: OrderCreateManyRegionInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumRegionTypeFieldUpdateOperationsInput = {
    set?: $Enums.RegionType
  }

  export type RegionUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<RegionCreateWithoutChildrenInput, RegionUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: RegionCreateOrConnectWithoutChildrenInput
    upsert?: RegionUpsertWithoutChildrenInput
    disconnect?: RegionWhereInput | boolean
    delete?: RegionWhereInput | boolean
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutChildrenInput, RegionUpdateWithoutChildrenInput>, RegionUncheckedUpdateWithoutChildrenInput>
  }

  export type RegionUpdateManyWithoutParentNestedInput = {
    create?: XOR<RegionCreateWithoutParentInput, RegionUncheckedCreateWithoutParentInput> | RegionCreateWithoutParentInput[] | RegionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutParentInput | RegionCreateOrConnectWithoutParentInput[]
    upsert?: RegionUpsertWithWhereUniqueWithoutParentInput | RegionUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RegionCreateManyParentInputEnvelope
    set?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    disconnect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    delete?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    update?: RegionUpdateWithWhereUniqueWithoutParentInput | RegionUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RegionUpdateManyWithWhereWithoutParentInput | RegionUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RegionScalarWhereInput | RegionScalarWhereInput[]
  }

  export type DriverProfileUpdateManyWithoutRegionNestedInput = {
    create?: XOR<DriverProfileCreateWithoutRegionInput, DriverProfileUncheckedCreateWithoutRegionInput> | DriverProfileCreateWithoutRegionInput[] | DriverProfileUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: DriverProfileCreateOrConnectWithoutRegionInput | DriverProfileCreateOrConnectWithoutRegionInput[]
    upsert?: DriverProfileUpsertWithWhereUniqueWithoutRegionInput | DriverProfileUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: DriverProfileCreateManyRegionInputEnvelope
    set?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
    disconnect?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
    delete?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
    connect?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
    update?: DriverProfileUpdateWithWhereUniqueWithoutRegionInput | DriverProfileUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: DriverProfileUpdateManyWithWhereWithoutRegionInput | DriverProfileUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: DriverProfileScalarWhereInput | DriverProfileScalarWhereInput[]
  }

  export type RegionTranslationUpdateManyWithoutRegionNestedInput = {
    create?: XOR<RegionTranslationCreateWithoutRegionInput, RegionTranslationUncheckedCreateWithoutRegionInput> | RegionTranslationCreateWithoutRegionInput[] | RegionTranslationUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: RegionTranslationCreateOrConnectWithoutRegionInput | RegionTranslationCreateOrConnectWithoutRegionInput[]
    upsert?: RegionTranslationUpsertWithWhereUniqueWithoutRegionInput | RegionTranslationUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: RegionTranslationCreateManyRegionInputEnvelope
    set?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
    disconnect?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
    delete?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
    connect?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
    update?: RegionTranslationUpdateWithWhereUniqueWithoutRegionInput | RegionTranslationUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: RegionTranslationUpdateManyWithWhereWithoutRegionInput | RegionTranslationUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: RegionTranslationScalarWhereInput | RegionTranslationScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutRegionNestedInput = {
    create?: XOR<OrderCreateWithoutRegionInput, OrderUncheckedCreateWithoutRegionInput> | OrderCreateWithoutRegionInput[] | OrderUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRegionInput | OrderCreateOrConnectWithoutRegionInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRegionInput | OrderUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: OrderCreateManyRegionInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRegionInput | OrderUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRegionInput | OrderUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RegionUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<RegionCreateWithoutParentInput, RegionUncheckedCreateWithoutParentInput> | RegionCreateWithoutParentInput[] | RegionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutParentInput | RegionCreateOrConnectWithoutParentInput[]
    upsert?: RegionUpsertWithWhereUniqueWithoutParentInput | RegionUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RegionCreateManyParentInputEnvelope
    set?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    disconnect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    delete?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    update?: RegionUpdateWithWhereUniqueWithoutParentInput | RegionUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RegionUpdateManyWithWhereWithoutParentInput | RegionUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RegionScalarWhereInput | RegionScalarWhereInput[]
  }

  export type DriverProfileUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<DriverProfileCreateWithoutRegionInput, DriverProfileUncheckedCreateWithoutRegionInput> | DriverProfileCreateWithoutRegionInput[] | DriverProfileUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: DriverProfileCreateOrConnectWithoutRegionInput | DriverProfileCreateOrConnectWithoutRegionInput[]
    upsert?: DriverProfileUpsertWithWhereUniqueWithoutRegionInput | DriverProfileUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: DriverProfileCreateManyRegionInputEnvelope
    set?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
    disconnect?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
    delete?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
    connect?: DriverProfileWhereUniqueInput | DriverProfileWhereUniqueInput[]
    update?: DriverProfileUpdateWithWhereUniqueWithoutRegionInput | DriverProfileUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: DriverProfileUpdateManyWithWhereWithoutRegionInput | DriverProfileUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: DriverProfileScalarWhereInput | DriverProfileScalarWhereInput[]
  }

  export type RegionTranslationUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<RegionTranslationCreateWithoutRegionInput, RegionTranslationUncheckedCreateWithoutRegionInput> | RegionTranslationCreateWithoutRegionInput[] | RegionTranslationUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: RegionTranslationCreateOrConnectWithoutRegionInput | RegionTranslationCreateOrConnectWithoutRegionInput[]
    upsert?: RegionTranslationUpsertWithWhereUniqueWithoutRegionInput | RegionTranslationUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: RegionTranslationCreateManyRegionInputEnvelope
    set?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
    disconnect?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
    delete?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
    connect?: RegionTranslationWhereUniqueInput | RegionTranslationWhereUniqueInput[]
    update?: RegionTranslationUpdateWithWhereUniqueWithoutRegionInput | RegionTranslationUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: RegionTranslationUpdateManyWithWhereWithoutRegionInput | RegionTranslationUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: RegionTranslationScalarWhereInput | RegionTranslationScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<OrderCreateWithoutRegionInput, OrderUncheckedCreateWithoutRegionInput> | OrderCreateWithoutRegionInput[] | OrderUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRegionInput | OrderCreateOrConnectWithoutRegionInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRegionInput | OrderUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: OrderCreateManyRegionInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRegionInput | OrderUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRegionInput | OrderUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CarCreateNestedManyWithoutVehicle_typeInput = {
    create?: XOR<CarCreateWithoutVehicle_typeInput, CarUncheckedCreateWithoutVehicle_typeInput> | CarCreateWithoutVehicle_typeInput[] | CarUncheckedCreateWithoutVehicle_typeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutVehicle_typeInput | CarCreateOrConnectWithoutVehicle_typeInput[]
    createMany?: CarCreateManyVehicle_typeInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutVehicle_typeInput = {
    create?: XOR<CarCreateWithoutVehicle_typeInput, CarUncheckedCreateWithoutVehicle_typeInput> | CarCreateWithoutVehicle_typeInput[] | CarUncheckedCreateWithoutVehicle_typeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutVehicle_typeInput | CarCreateOrConnectWithoutVehicle_typeInput[]
    createMany?: CarCreateManyVehicle_typeInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUpdateManyWithoutVehicle_typeNestedInput = {
    create?: XOR<CarCreateWithoutVehicle_typeInput, CarUncheckedCreateWithoutVehicle_typeInput> | CarCreateWithoutVehicle_typeInput[] | CarUncheckedCreateWithoutVehicle_typeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutVehicle_typeInput | CarCreateOrConnectWithoutVehicle_typeInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutVehicle_typeInput | CarUpsertWithWhereUniqueWithoutVehicle_typeInput[]
    createMany?: CarCreateManyVehicle_typeInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutVehicle_typeInput | CarUpdateWithWhereUniqueWithoutVehicle_typeInput[]
    updateMany?: CarUpdateManyWithWhereWithoutVehicle_typeInput | CarUpdateManyWithWhereWithoutVehicle_typeInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutVehicle_typeNestedInput = {
    create?: XOR<CarCreateWithoutVehicle_typeInput, CarUncheckedCreateWithoutVehicle_typeInput> | CarCreateWithoutVehicle_typeInput[] | CarUncheckedCreateWithoutVehicle_typeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutVehicle_typeInput | CarCreateOrConnectWithoutVehicle_typeInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutVehicle_typeInput | CarUpsertWithWhereUniqueWithoutVehicle_typeInput[]
    createMany?: CarCreateManyVehicle_typeInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutVehicle_typeInput | CarUpdateWithWhereUniqueWithoutVehicle_typeInput[]
    updateMany?: CarUpdateManyWithWhereWithoutVehicle_typeInput | CarUpdateManyWithWhereWithoutVehicle_typeInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<RegionCreateWithoutTranslationsInput, RegionUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutTranslationsInput
    connect?: RegionWhereUniqueInput
  }

  export type RegionUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<RegionCreateWithoutTranslationsInput, RegionUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutTranslationsInput
    upsert?: RegionUpsertWithoutTranslationsInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutTranslationsInput, RegionUpdateWithoutTranslationsInput>, RegionUncheckedUpdateWithoutTranslationsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumVehicleVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleVerificationStatus | EnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleVerificationStatus[] | ListEnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleVerificationStatus[] | ListEnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleVerificationStatusFilter<$PrismaModel> | $Enums.VehicleVerificationStatus
  }

  export type NestedEnumVehicleVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleVerificationStatus | EnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleVerificationStatus[] | ListEnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleVerificationStatus[] | ListEnumVehicleVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleVerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleVerificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
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

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
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

  export type NestedEnumRegionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RegionType | EnumRegionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RegionType[] | ListEnumRegionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegionType[] | ListEnumRegionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRegionTypeFilter<$PrismaModel> | $Enums.RegionType
  }

  export type NestedEnumRegionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegionType | EnumRegionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RegionType[] | ListEnumRegionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegionType[] | ListEnumRegionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRegionTypeWithAggregatesFilter<$PrismaModel> | $Enums.RegionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegionTypeFilter<$PrismaModel>
    _max?: NestedEnumRegionTypeFilter<$PrismaModel>
  }

  export type DriverProfileCreateWithoutUserInput = {
    id?: string
    name?: string | null
    rating?: number
    status?: number
    region?: RegionCreateNestedOneWithoutDriversInput
    cars?: CarCreateNestedManyWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    orders?: OrderCreateNestedManyWithoutDriverInput
    ratings?: RatingCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    regionId?: string | null
    rating?: number
    status?: number
    cars?: CarUncheckedCreateNestedManyWithoutDriverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    orders?: OrderUncheckedCreateNestedManyWithoutDriverInput
    ratings?: RatingUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileCreateOrConnectWithoutUserInput = {
    where: DriverProfileWhereUniqueInput
    create: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
  }

  export type AdminProfileCreateWithoutUserInput = {
    id?: string
    name?: string | null
    audit_logs?: AuditLogCreateNestedManyWithoutAdminInput
  }

  export type AdminProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminProfileCreateOrConnectWithoutUserInput = {
    where: AdminProfileWhereUniqueInput
    create: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
  }

  export type ClientProfileCreateWithoutUserInput = {
    id?: string
    name?: string | null
    orders?: OrderCreateNestedManyWithoutClientInput
    ratings?: RatingCreateNestedManyWithoutClientInput
  }

  export type ClientProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutClientInput
    ratings?: RatingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientProfileCreateOrConnectWithoutUserInput = {
    where: ClientProfileWhereUniqueInput
    create: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
  }

  export type DriverProfileUpsertWithoutUserInput = {
    update: XOR<DriverProfileUpdateWithoutUserInput, DriverProfileUncheckedUpdateWithoutUserInput>
    create: XOR<DriverProfileCreateWithoutUserInput, DriverProfileUncheckedCreateWithoutUserInput>
    where?: DriverProfileWhereInput
  }

  export type DriverProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: DriverProfileWhereInput
    data: XOR<DriverProfileUpdateWithoutUserInput, DriverProfileUncheckedUpdateWithoutUserInput>
  }

  export type DriverProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    region?: RegionUpdateOneWithoutDriversNestedInput
    cars?: CarUpdateManyWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    orders?: OrderUpdateManyWithoutDriverNestedInput
    ratings?: RatingUpdateManyWithoutDriverNestedInput
  }

  export type DriverProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    cars?: CarUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDriverNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type AdminProfileUpsertWithoutUserInput = {
    update: XOR<AdminProfileUpdateWithoutUserInput, AdminProfileUncheckedUpdateWithoutUserInput>
    create: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    where?: AdminProfileWhereInput
  }

  export type AdminProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminProfileWhereInput
    data: XOR<AdminProfileUpdateWithoutUserInput, AdminProfileUncheckedUpdateWithoutUserInput>
  }

  export type AdminProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: AuditLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ClientProfileUpsertWithoutUserInput = {
    update: XOR<ClientProfileUpdateWithoutUserInput, ClientProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    where?: ClientProfileWhereInput
  }

  export type ClientProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ClientProfileWhereInput
    data: XOR<ClientProfileUpdateWithoutUserInput, ClientProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClientProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutClientNestedInput
    ratings?: RatingUpdateManyWithoutClientNestedInput
  }

  export type ClientProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutClientNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserCreateWithoutDriverProfileInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDriverProfileInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDriverProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDriverProfileInput, UserUncheckedCreateWithoutDriverProfileInput>
  }

  export type RegionCreateWithoutDriversInput = {
    id?: string
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    parent?: RegionCreateNestedOneWithoutChildrenInput
    children?: RegionCreateNestedManyWithoutParentInput
    translations?: RegionTranslationCreateNestedManyWithoutRegionInput
    orders?: OrderCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutDriversInput = {
    id?: string
    parent_id?: string | null
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    children?: RegionUncheckedCreateNestedManyWithoutParentInput
    translations?: RegionTranslationUncheckedCreateNestedManyWithoutRegionInput
    orders?: OrderUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutDriversInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutDriversInput, RegionUncheckedCreateWithoutDriversInput>
  }

  export type CarCreateWithoutDriverInput = {
    id?: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    vehicle_type: VehicleTypeCreateNestedOneWithoutCarsInput
    orders?: OrderCreateNestedManyWithoutCarInput
    media?: VehicleMediaCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutDriverInput = {
    id?: string
    vehicle_type_id: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    orders?: OrderUncheckedCreateNestedManyWithoutCarInput
    media?: VehicleMediaUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutDriverInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutDriverInput, CarUncheckedCreateWithoutDriverInput>
  }

  export type CarCreateManyDriverInputEnvelope = {
    data: CarCreateManyDriverInput | CarCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutDriverInput = {
    id?: string
    type: $Enums.DocumentType
    file_url: string
    status?: $Enums.DocumentStatus
    expires_at?: Date | string | null
  }

  export type DocumentUncheckedCreateWithoutDriverInput = {
    id?: string
    type: $Enums.DocumentType
    file_url: string
    status?: $Enums.DocumentStatus
    expires_at?: Date | string | null
  }

  export type DocumentCreateOrConnectWithoutDriverInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput>
  }

  export type DocumentCreateManyDriverInputEnvelope = {
    data: DocumentCreateManyDriverInput | DocumentCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutDriverInput = {
    id?: string
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    client?: ClientProfileCreateNestedOneWithoutOrdersInput
    region?: RegionCreateNestedOneWithoutOrdersInput
    car?: CarCreateNestedOneWithoutOrdersInput
    rating?: RatingCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDriverInput = {
    id?: string
    clientId?: string | null
    regionId?: string | null
    car_id?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    rating?: RatingUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDriverInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput>
  }

  export type OrderCreateManyDriverInputEnvelope = {
    data: OrderCreateManyDriverInput | OrderCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutDriverInput = {
    id?: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutRatingInput
    client: ClientProfileCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutDriverInput = {
    id?: string
    order_id: string
    clientId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutDriverInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutDriverInput, RatingUncheckedCreateWithoutDriverInput>
  }

  export type RatingCreateManyDriverInputEnvelope = {
    data: RatingCreateManyDriverInput | RatingCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDriverProfileInput = {
    update: XOR<UserUpdateWithoutDriverProfileInput, UserUncheckedUpdateWithoutDriverProfileInput>
    create: XOR<UserCreateWithoutDriverProfileInput, UserUncheckedCreateWithoutDriverProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDriverProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDriverProfileInput, UserUncheckedUpdateWithoutDriverProfileInput>
  }

  export type UserUpdateWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDriverProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RegionUpsertWithoutDriversInput = {
    update: XOR<RegionUpdateWithoutDriversInput, RegionUncheckedUpdateWithoutDriversInput>
    create: XOR<RegionCreateWithoutDriversInput, RegionUncheckedCreateWithoutDriversInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutDriversInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutDriversInput, RegionUncheckedUpdateWithoutDriversInput>
  }

  export type RegionUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parent?: RegionUpdateOneWithoutChildrenNestedInput
    children?: RegionUpdateManyWithoutParentNestedInput
    translations?: RegionTranslationUpdateManyWithoutRegionNestedInput
    orders?: OrderUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    children?: RegionUncheckedUpdateManyWithoutParentNestedInput
    translations?: RegionTranslationUncheckedUpdateManyWithoutRegionNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type CarUpsertWithWhereUniqueWithoutDriverInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutDriverInput, CarUncheckedUpdateWithoutDriverInput>
    create: XOR<CarCreateWithoutDriverInput, CarUncheckedCreateWithoutDriverInput>
  }

  export type CarUpdateWithWhereUniqueWithoutDriverInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutDriverInput, CarUncheckedUpdateWithoutDriverInput>
  }

  export type CarUpdateManyWithWhereWithoutDriverInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutDriverInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: StringFilter<"Car"> | string
    driverId?: StringFilter<"Car"> | string
    vehicle_type_id?: StringFilter<"Car"> | string
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    color?: StringNullableFilter<"Car"> | string | null
    license_plate?: StringFilter<"Car"> | string
    verification_status?: EnumVehicleVerificationStatusFilter<"Car"> | $Enums.VehicleVerificationStatus
  }

  export type DocumentUpsertWithWhereUniqueWithoutDriverInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutDriverInput, DocumentUncheckedUpdateWithoutDriverInput>
    create: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutDriverInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutDriverInput, DocumentUncheckedUpdateWithoutDriverInput>
  }

  export type DocumentUpdateManyWithWhereWithoutDriverInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutDriverInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    driverId?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    file_url?: StringFilter<"Document"> | string
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    expires_at?: DateTimeNullableFilter<"Document"> | Date | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutDriverInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutDriverInput, OrderUncheckedUpdateWithoutDriverInput>
    create: XOR<OrderCreateWithoutDriverInput, OrderUncheckedCreateWithoutDriverInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutDriverInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutDriverInput, OrderUncheckedUpdateWithoutDriverInput>
  }

  export type OrderUpdateManyWithWhereWithoutDriverInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutDriverInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    clientId?: StringNullableFilter<"Order"> | string | null
    regionId?: StringNullableFilter<"Order"> | string | null
    driverId?: StringNullableFilter<"Order"> | string | null
    car_id?: StringNullableFilter<"Order"> | string | null
    name?: StringNullableFilter<"Order"> | string | null
    from_address?: StringFilter<"Order"> | string
    to_address?: StringFilter<"Order"> | string
    distance?: FloatNullableFilter<"Order"> | number | null
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    trip_datetime?: DateTimeFilter<"Order"> | Date | string
    notes?: StringNullableFilter<"Order"> | string | null
    passenger_count?: IntFilter<"Order"> | number
    flight_number?: StringNullableFilter<"Order"> | string | null
  }

  export type RatingUpsertWithWhereUniqueWithoutDriverInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutDriverInput, RatingUncheckedUpdateWithoutDriverInput>
    create: XOR<RatingCreateWithoutDriverInput, RatingUncheckedCreateWithoutDriverInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutDriverInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutDriverInput, RatingUncheckedUpdateWithoutDriverInput>
  }

  export type RatingUpdateManyWithWhereWithoutDriverInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutDriverInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: StringFilter<"Rating"> | string
    order_id?: StringFilter<"Rating"> | string
    driverId?: StringFilter<"Rating"> | string
    clientId?: StringFilter<"Rating"> | string
    score?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
  }

  export type UserCreateWithoutAdminProfileInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminProfileInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
  }

  export type AuditLogCreateWithoutAdminInput = {
    id?: string
    action: string
    target_entity?: string | null
    target_id?: string | null
    created_at?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutAdminInput = {
    id?: string
    action: string
    target_entity?: string | null
    target_id?: string | null
    created_at?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutAdminInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
  }

  export type AuditLogCreateManyAdminInputEnvelope = {
    data: AuditLogCreateManyAdminInput | AuditLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAdminProfileInput = {
    update: XOR<UserUpdateWithoutAdminProfileInput, UserUncheckedUpdateWithoutAdminProfileInput>
    create: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminProfileInput, UserUncheckedUpdateWithoutAdminProfileInput>
  }

  export type UserUpdateWithoutAdminProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AuditLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutAdminInput, AuditLogUncheckedUpdateWithoutAdminInput>
    create: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutAdminInput, AuditLogUncheckedUpdateWithoutAdminInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutAdminInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    adminId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    target_entity?: StringNullableFilter<"AuditLog"> | string | null
    target_id?: StringNullableFilter<"AuditLog"> | string | null
    created_at?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutClientProfileInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    driverProfile?: DriverProfileCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientProfileInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    driverProfile?: DriverProfileUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientProfileInput, UserUncheckedCreateWithoutClientProfileInput>
  }

  export type OrderCreateWithoutClientInput = {
    id?: string
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    region?: RegionCreateNestedOneWithoutOrdersInput
    driver?: DriverProfileCreateNestedOneWithoutOrdersInput
    car?: CarCreateNestedOneWithoutOrdersInput
    rating?: RatingCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutClientInput = {
    id?: string
    regionId?: string | null
    driverId?: string | null
    car_id?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    rating?: RatingUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutClientInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderCreateManyClientInputEnvelope = {
    data: OrderCreateManyClientInput | OrderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutClientInput = {
    id?: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutRatingInput
    driver: DriverProfileCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutClientInput = {
    id?: string
    order_id: string
    driverId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutClientInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput>
  }

  export type RatingCreateManyClientInputEnvelope = {
    data: RatingCreateManyClientInput | RatingCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientProfileInput = {
    update: XOR<UserUpdateWithoutClientProfileInput, UserUncheckedUpdateWithoutClientProfileInput>
    create: XOR<UserCreateWithoutClientProfileInput, UserUncheckedCreateWithoutClientProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientProfileInput, UserUncheckedUpdateWithoutClientProfileInput>
  }

  export type UserUpdateWithoutClientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverProfile?: DriverProfileUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverProfile?: DriverProfileUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
  }

  export type OrderUpdateManyWithWhereWithoutClientInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutClientInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutClientInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutClientInput, RatingUncheckedUpdateWithoutClientInput>
    create: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutClientInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutClientInput, RatingUncheckedUpdateWithoutClientInput>
  }

  export type RatingUpdateManyWithWhereWithoutClientInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutClientInput>
  }

  export type DriverProfileCreateWithoutCarsInput = {
    id?: string
    name?: string | null
    rating?: number
    status?: number
    user: UserCreateNestedOneWithoutDriverProfileInput
    region?: RegionCreateNestedOneWithoutDriversInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    orders?: OrderCreateNestedManyWithoutDriverInput
    ratings?: RatingCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileUncheckedCreateWithoutCarsInput = {
    id?: string
    userId: string
    name?: string | null
    regionId?: string | null
    rating?: number
    status?: number
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    orders?: OrderUncheckedCreateNestedManyWithoutDriverInput
    ratings?: RatingUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileCreateOrConnectWithoutCarsInput = {
    where: DriverProfileWhereUniqueInput
    create: XOR<DriverProfileCreateWithoutCarsInput, DriverProfileUncheckedCreateWithoutCarsInput>
  }

  export type VehicleTypeCreateWithoutCarsInput = {
    id?: string
    name: string
    max_passengers: number
    max_luggage_standard: number
    max_luggage_small: number
  }

  export type VehicleTypeUncheckedCreateWithoutCarsInput = {
    id?: string
    name: string
    max_passengers: number
    max_luggage_standard: number
    max_luggage_small: number
  }

  export type VehicleTypeCreateOrConnectWithoutCarsInput = {
    where: VehicleTypeWhereUniqueInput
    create: XOR<VehicleTypeCreateWithoutCarsInput, VehicleTypeUncheckedCreateWithoutCarsInput>
  }

  export type OrderCreateWithoutCarInput = {
    id?: string
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    client?: ClientProfileCreateNestedOneWithoutOrdersInput
    region?: RegionCreateNestedOneWithoutOrdersInput
    driver?: DriverProfileCreateNestedOneWithoutOrdersInput
    rating?: RatingCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCarInput = {
    id?: string
    clientId?: string | null
    regionId?: string | null
    driverId?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    rating?: RatingUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCarInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCarInput, OrderUncheckedCreateWithoutCarInput>
  }

  export type OrderCreateManyCarInputEnvelope = {
    data: OrderCreateManyCarInput | OrderCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type VehicleMediaCreateWithoutCarInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type VehicleMediaUncheckedCreateWithoutCarInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type VehicleMediaCreateOrConnectWithoutCarInput = {
    where: VehicleMediaWhereUniqueInput
    create: XOR<VehicleMediaCreateWithoutCarInput, VehicleMediaUncheckedCreateWithoutCarInput>
  }

  export type VehicleMediaCreateManyCarInputEnvelope = {
    data: VehicleMediaCreateManyCarInput | VehicleMediaCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type DriverProfileUpsertWithoutCarsInput = {
    update: XOR<DriverProfileUpdateWithoutCarsInput, DriverProfileUncheckedUpdateWithoutCarsInput>
    create: XOR<DriverProfileCreateWithoutCarsInput, DriverProfileUncheckedCreateWithoutCarsInput>
    where?: DriverProfileWhereInput
  }

  export type DriverProfileUpdateToOneWithWhereWithoutCarsInput = {
    where?: DriverProfileWhereInput
    data: XOR<DriverProfileUpdateWithoutCarsInput, DriverProfileUncheckedUpdateWithoutCarsInput>
  }

  export type DriverProfileUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDriverProfileNestedInput
    region?: RegionUpdateOneWithoutDriversNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    orders?: OrderUpdateManyWithoutDriverNestedInput
    ratings?: RatingUpdateManyWithoutDriverNestedInput
  }

  export type DriverProfileUncheckedUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDriverNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type VehicleTypeUpsertWithoutCarsInput = {
    update: XOR<VehicleTypeUpdateWithoutCarsInput, VehicleTypeUncheckedUpdateWithoutCarsInput>
    create: XOR<VehicleTypeCreateWithoutCarsInput, VehicleTypeUncheckedCreateWithoutCarsInput>
    where?: VehicleTypeWhereInput
  }

  export type VehicleTypeUpdateToOneWithWhereWithoutCarsInput = {
    where?: VehicleTypeWhereInput
    data: XOR<VehicleTypeUpdateWithoutCarsInput, VehicleTypeUncheckedUpdateWithoutCarsInput>
  }

  export type VehicleTypeUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    max_luggage_standard?: IntFieldUpdateOperationsInput | number
    max_luggage_small?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleTypeUncheckedUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    max_luggage_standard?: IntFieldUpdateOperationsInput | number
    max_luggage_small?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpsertWithWhereUniqueWithoutCarInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCarInput, OrderUncheckedUpdateWithoutCarInput>
    create: XOR<OrderCreateWithoutCarInput, OrderUncheckedCreateWithoutCarInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCarInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCarInput, OrderUncheckedUpdateWithoutCarInput>
  }

  export type OrderUpdateManyWithWhereWithoutCarInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCarInput>
  }

  export type VehicleMediaUpsertWithWhereUniqueWithoutCarInput = {
    where: VehicleMediaWhereUniqueInput
    update: XOR<VehicleMediaUpdateWithoutCarInput, VehicleMediaUncheckedUpdateWithoutCarInput>
    create: XOR<VehicleMediaCreateWithoutCarInput, VehicleMediaUncheckedCreateWithoutCarInput>
  }

  export type VehicleMediaUpdateWithWhereUniqueWithoutCarInput = {
    where: VehicleMediaWhereUniqueInput
    data: XOR<VehicleMediaUpdateWithoutCarInput, VehicleMediaUncheckedUpdateWithoutCarInput>
  }

  export type VehicleMediaUpdateManyWithWhereWithoutCarInput = {
    where: VehicleMediaScalarWhereInput
    data: XOR<VehicleMediaUpdateManyMutationInput, VehicleMediaUncheckedUpdateManyWithoutCarInput>
  }

  export type VehicleMediaScalarWhereInput = {
    AND?: VehicleMediaScalarWhereInput | VehicleMediaScalarWhereInput[]
    OR?: VehicleMediaScalarWhereInput[]
    NOT?: VehicleMediaScalarWhereInput | VehicleMediaScalarWhereInput[]
    id?: StringFilter<"VehicleMedia"> | string
    carId?: StringFilter<"VehicleMedia"> | string
    url?: StringFilter<"VehicleMedia"> | string
    type?: EnumMediaTypeFilter<"VehicleMedia"> | $Enums.MediaType
    createdAt?: DateTimeFilter<"VehicleMedia"> | Date | string
  }

  export type CarCreateWithoutMediaInput = {
    id?: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    driver: DriverProfileCreateNestedOneWithoutCarsInput
    vehicle_type: VehicleTypeCreateNestedOneWithoutCarsInput
    orders?: OrderCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutMediaInput = {
    id?: string
    driverId: string
    vehicle_type_id: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    orders?: OrderUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutMediaInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutMediaInput, CarUncheckedCreateWithoutMediaInput>
  }

  export type CarUpsertWithoutMediaInput = {
    update: XOR<CarUpdateWithoutMediaInput, CarUncheckedUpdateWithoutMediaInput>
    create: XOR<CarCreateWithoutMediaInput, CarUncheckedCreateWithoutMediaInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutMediaInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutMediaInput, CarUncheckedUpdateWithoutMediaInput>
  }

  export type CarUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    driver?: DriverProfileUpdateOneRequiredWithoutCarsNestedInput
    vehicle_type?: VehicleTypeUpdateOneRequiredWithoutCarsNestedInput
    orders?: OrderUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicle_type_id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    orders?: OrderUncheckedUpdateManyWithoutCarNestedInput
  }

  export type ClientProfileCreateWithoutOrdersInput = {
    id?: string
    name?: string | null
    user: UserCreateNestedOneWithoutClientProfileInput
    ratings?: RatingCreateNestedManyWithoutClientInput
  }

  export type ClientProfileUncheckedCreateWithoutOrdersInput = {
    id?: string
    userId: string
    name?: string | null
    ratings?: RatingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientProfileCreateOrConnectWithoutOrdersInput = {
    where: ClientProfileWhereUniqueInput
    create: XOR<ClientProfileCreateWithoutOrdersInput, ClientProfileUncheckedCreateWithoutOrdersInput>
  }

  export type RegionCreateWithoutOrdersInput = {
    id?: string
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    parent?: RegionCreateNestedOneWithoutChildrenInput
    children?: RegionCreateNestedManyWithoutParentInput
    drivers?: DriverProfileCreateNestedManyWithoutRegionInput
    translations?: RegionTranslationCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutOrdersInput = {
    id?: string
    parent_id?: string | null
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    children?: RegionUncheckedCreateNestedManyWithoutParentInput
    drivers?: DriverProfileUncheckedCreateNestedManyWithoutRegionInput
    translations?: RegionTranslationUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutOrdersInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutOrdersInput, RegionUncheckedCreateWithoutOrdersInput>
  }

  export type DriverProfileCreateWithoutOrdersInput = {
    id?: string
    name?: string | null
    rating?: number
    status?: number
    user: UserCreateNestedOneWithoutDriverProfileInput
    region?: RegionCreateNestedOneWithoutDriversInput
    cars?: CarCreateNestedManyWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    ratings?: RatingCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileUncheckedCreateWithoutOrdersInput = {
    id?: string
    userId: string
    name?: string | null
    regionId?: string | null
    rating?: number
    status?: number
    cars?: CarUncheckedCreateNestedManyWithoutDriverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    ratings?: RatingUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileCreateOrConnectWithoutOrdersInput = {
    where: DriverProfileWhereUniqueInput
    create: XOR<DriverProfileCreateWithoutOrdersInput, DriverProfileUncheckedCreateWithoutOrdersInput>
  }

  export type CarCreateWithoutOrdersInput = {
    id?: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    driver: DriverProfileCreateNestedOneWithoutCarsInput
    vehicle_type: VehicleTypeCreateNestedOneWithoutCarsInput
    media?: VehicleMediaCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutOrdersInput = {
    id?: string
    driverId: string
    vehicle_type_id: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    media?: VehicleMediaUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutOrdersInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutOrdersInput, CarUncheckedCreateWithoutOrdersInput>
  }

  export type RatingCreateWithoutOrderInput = {
    id?: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    driver: DriverProfileCreateNestedOneWithoutRatingsInput
    client: ClientProfileCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutOrderInput = {
    id?: string
    driverId: string
    clientId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutOrderInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutOrderInput, RatingUncheckedCreateWithoutOrderInput>
  }

  export type ClientProfileUpsertWithoutOrdersInput = {
    update: XOR<ClientProfileUpdateWithoutOrdersInput, ClientProfileUncheckedUpdateWithoutOrdersInput>
    create: XOR<ClientProfileCreateWithoutOrdersInput, ClientProfileUncheckedCreateWithoutOrdersInput>
    where?: ClientProfileWhereInput
  }

  export type ClientProfileUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ClientProfileWhereInput
    data: XOR<ClientProfileUpdateWithoutOrdersInput, ClientProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientProfileUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutClientProfileNestedInput
    ratings?: RatingUpdateManyWithoutClientNestedInput
  }

  export type ClientProfileUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: RatingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type RegionUpsertWithoutOrdersInput = {
    update: XOR<RegionUpdateWithoutOrdersInput, RegionUncheckedUpdateWithoutOrdersInput>
    create: XOR<RegionCreateWithoutOrdersInput, RegionUncheckedCreateWithoutOrdersInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutOrdersInput, RegionUncheckedUpdateWithoutOrdersInput>
  }

  export type RegionUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parent?: RegionUpdateOneWithoutChildrenNestedInput
    children?: RegionUpdateManyWithoutParentNestedInput
    drivers?: DriverProfileUpdateManyWithoutRegionNestedInput
    translations?: RegionTranslationUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    children?: RegionUncheckedUpdateManyWithoutParentNestedInput
    drivers?: DriverProfileUncheckedUpdateManyWithoutRegionNestedInput
    translations?: RegionTranslationUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type DriverProfileUpsertWithoutOrdersInput = {
    update: XOR<DriverProfileUpdateWithoutOrdersInput, DriverProfileUncheckedUpdateWithoutOrdersInput>
    create: XOR<DriverProfileCreateWithoutOrdersInput, DriverProfileUncheckedCreateWithoutOrdersInput>
    where?: DriverProfileWhereInput
  }

  export type DriverProfileUpdateToOneWithWhereWithoutOrdersInput = {
    where?: DriverProfileWhereInput
    data: XOR<DriverProfileUpdateWithoutOrdersInput, DriverProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type DriverProfileUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDriverProfileNestedInput
    region?: RegionUpdateOneWithoutDriversNestedInput
    cars?: CarUpdateManyWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    ratings?: RatingUpdateManyWithoutDriverNestedInput
  }

  export type DriverProfileUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    cars?: CarUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type CarUpsertWithoutOrdersInput = {
    update: XOR<CarUpdateWithoutOrdersInput, CarUncheckedUpdateWithoutOrdersInput>
    create: XOR<CarCreateWithoutOrdersInput, CarUncheckedCreateWithoutOrdersInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutOrdersInput, CarUncheckedUpdateWithoutOrdersInput>
  }

  export type CarUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    driver?: DriverProfileUpdateOneRequiredWithoutCarsNestedInput
    vehicle_type?: VehicleTypeUpdateOneRequiredWithoutCarsNestedInput
    media?: VehicleMediaUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicle_type_id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    media?: VehicleMediaUncheckedUpdateManyWithoutCarNestedInput
  }

  export type RatingUpsertWithoutOrderInput = {
    update: XOR<RatingUpdateWithoutOrderInput, RatingUncheckedUpdateWithoutOrderInput>
    create: XOR<RatingCreateWithoutOrderInput, RatingUncheckedCreateWithoutOrderInput>
    where?: RatingWhereInput
  }

  export type RatingUpdateToOneWithWhereWithoutOrderInput = {
    where?: RatingWhereInput
    data: XOR<RatingUpdateWithoutOrderInput, RatingUncheckedUpdateWithoutOrderInput>
  }

  export type RatingUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverProfileUpdateOneRequiredWithoutRatingsNestedInput
    client?: ClientProfileUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutRatingInput = {
    id?: string
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    client?: ClientProfileCreateNestedOneWithoutOrdersInput
    region?: RegionCreateNestedOneWithoutOrdersInput
    driver?: DriverProfileCreateNestedOneWithoutOrdersInput
    car?: CarCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutRatingInput = {
    id?: string
    clientId?: string | null
    regionId?: string | null
    driverId?: string | null
    car_id?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
  }

  export type OrderCreateOrConnectWithoutRatingInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRatingInput, OrderUncheckedCreateWithoutRatingInput>
  }

  export type DriverProfileCreateWithoutRatingsInput = {
    id?: string
    name?: string | null
    rating?: number
    status?: number
    user: UserCreateNestedOneWithoutDriverProfileInput
    region?: RegionCreateNestedOneWithoutDriversInput
    cars?: CarCreateNestedManyWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    orders?: OrderCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileUncheckedCreateWithoutRatingsInput = {
    id?: string
    userId: string
    name?: string | null
    regionId?: string | null
    rating?: number
    status?: number
    cars?: CarUncheckedCreateNestedManyWithoutDriverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    orders?: OrderUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileCreateOrConnectWithoutRatingsInput = {
    where: DriverProfileWhereUniqueInput
    create: XOR<DriverProfileCreateWithoutRatingsInput, DriverProfileUncheckedCreateWithoutRatingsInput>
  }

  export type ClientProfileCreateWithoutRatingsInput = {
    id?: string
    name?: string | null
    user: UserCreateNestedOneWithoutClientProfileInput
    orders?: OrderCreateNestedManyWithoutClientInput
  }

  export type ClientProfileUncheckedCreateWithoutRatingsInput = {
    id?: string
    userId: string
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientProfileCreateOrConnectWithoutRatingsInput = {
    where: ClientProfileWhereUniqueInput
    create: XOR<ClientProfileCreateWithoutRatingsInput, ClientProfileUncheckedCreateWithoutRatingsInput>
  }

  export type OrderUpsertWithoutRatingInput = {
    update: XOR<OrderUpdateWithoutRatingInput, OrderUncheckedUpdateWithoutRatingInput>
    create: XOR<OrderCreateWithoutRatingInput, OrderUncheckedCreateWithoutRatingInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutRatingInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutRatingInput, OrderUncheckedUpdateWithoutRatingInput>
  }

  export type OrderUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientProfileUpdateOneWithoutOrdersNestedInput
    region?: RegionUpdateOneWithoutOrdersNestedInput
    driver?: DriverProfileUpdateOneWithoutOrdersNestedInput
    car?: CarUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DriverProfileUpsertWithoutRatingsInput = {
    update: XOR<DriverProfileUpdateWithoutRatingsInput, DriverProfileUncheckedUpdateWithoutRatingsInput>
    create: XOR<DriverProfileCreateWithoutRatingsInput, DriverProfileUncheckedCreateWithoutRatingsInput>
    where?: DriverProfileWhereInput
  }

  export type DriverProfileUpdateToOneWithWhereWithoutRatingsInput = {
    where?: DriverProfileWhereInput
    data: XOR<DriverProfileUpdateWithoutRatingsInput, DriverProfileUncheckedUpdateWithoutRatingsInput>
  }

  export type DriverProfileUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDriverProfileNestedInput
    region?: RegionUpdateOneWithoutDriversNestedInput
    cars?: CarUpdateManyWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    orders?: OrderUpdateManyWithoutDriverNestedInput
  }

  export type DriverProfileUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    cars?: CarUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type ClientProfileUpsertWithoutRatingsInput = {
    update: XOR<ClientProfileUpdateWithoutRatingsInput, ClientProfileUncheckedUpdateWithoutRatingsInput>
    create: XOR<ClientProfileCreateWithoutRatingsInput, ClientProfileUncheckedCreateWithoutRatingsInput>
    where?: ClientProfileWhereInput
  }

  export type ClientProfileUpdateToOneWithWhereWithoutRatingsInput = {
    where?: ClientProfileWhereInput
    data: XOR<ClientProfileUpdateWithoutRatingsInput, ClientProfileUncheckedUpdateWithoutRatingsInput>
  }

  export type ClientProfileUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutClientProfileNestedInput
    orders?: OrderUpdateManyWithoutClientNestedInput
  }

  export type ClientProfileUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type DriverProfileCreateWithoutDocumentsInput = {
    id?: string
    name?: string | null
    rating?: number
    status?: number
    user: UserCreateNestedOneWithoutDriverProfileInput
    region?: RegionCreateNestedOneWithoutDriversInput
    cars?: CarCreateNestedManyWithoutDriverInput
    orders?: OrderCreateNestedManyWithoutDriverInput
    ratings?: RatingCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileUncheckedCreateWithoutDocumentsInput = {
    id?: string
    userId: string
    name?: string | null
    regionId?: string | null
    rating?: number
    status?: number
    cars?: CarUncheckedCreateNestedManyWithoutDriverInput
    orders?: OrderUncheckedCreateNestedManyWithoutDriverInput
    ratings?: RatingUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileCreateOrConnectWithoutDocumentsInput = {
    where: DriverProfileWhereUniqueInput
    create: XOR<DriverProfileCreateWithoutDocumentsInput, DriverProfileUncheckedCreateWithoutDocumentsInput>
  }

  export type DriverProfileUpsertWithoutDocumentsInput = {
    update: XOR<DriverProfileUpdateWithoutDocumentsInput, DriverProfileUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DriverProfileCreateWithoutDocumentsInput, DriverProfileUncheckedCreateWithoutDocumentsInput>
    where?: DriverProfileWhereInput
  }

  export type DriverProfileUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DriverProfileWhereInput
    data: XOR<DriverProfileUpdateWithoutDocumentsInput, DriverProfileUncheckedUpdateWithoutDocumentsInput>
  }

  export type DriverProfileUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDriverProfileNestedInput
    region?: RegionUpdateOneWithoutDriversNestedInput
    cars?: CarUpdateManyWithoutDriverNestedInput
    orders?: OrderUpdateManyWithoutDriverNestedInput
    ratings?: RatingUpdateManyWithoutDriverNestedInput
  }

  export type DriverProfileUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    cars?: CarUncheckedUpdateManyWithoutDriverNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDriverNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type AdminProfileCreateWithoutAudit_logsInput = {
    id?: string
    name?: string | null
    user: UserCreateNestedOneWithoutAdminProfileInput
  }

  export type AdminProfileUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    userId: string
    name?: string | null
  }

  export type AdminProfileCreateOrConnectWithoutAudit_logsInput = {
    where: AdminProfileWhereUniqueInput
    create: XOR<AdminProfileCreateWithoutAudit_logsInput, AdminProfileUncheckedCreateWithoutAudit_logsInput>
  }

  export type AdminProfileUpsertWithoutAudit_logsInput = {
    update: XOR<AdminProfileUpdateWithoutAudit_logsInput, AdminProfileUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<AdminProfileCreateWithoutAudit_logsInput, AdminProfileUncheckedCreateWithoutAudit_logsInput>
    where?: AdminProfileWhereInput
  }

  export type AdminProfileUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: AdminProfileWhereInput
    data: XOR<AdminProfileUpdateWithoutAudit_logsInput, AdminProfileUncheckedUpdateWithoutAudit_logsInput>
  }

  export type AdminProfileUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAdminProfileNestedInput
  }

  export type AdminProfileUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegionCreateWithoutChildrenInput = {
    id?: string
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    parent?: RegionCreateNestedOneWithoutChildrenInput
    drivers?: DriverProfileCreateNestedManyWithoutRegionInput
    translations?: RegionTranslationCreateNestedManyWithoutRegionInput
    orders?: OrderCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutChildrenInput = {
    id?: string
    parent_id?: string | null
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    drivers?: DriverProfileUncheckedCreateNestedManyWithoutRegionInput
    translations?: RegionTranslationUncheckedCreateNestedManyWithoutRegionInput
    orders?: OrderUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutChildrenInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutChildrenInput, RegionUncheckedCreateWithoutChildrenInput>
  }

  export type RegionCreateWithoutParentInput = {
    id?: string
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    children?: RegionCreateNestedManyWithoutParentInput
    drivers?: DriverProfileCreateNestedManyWithoutRegionInput
    translations?: RegionTranslationCreateNestedManyWithoutRegionInput
    orders?: OrderCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    children?: RegionUncheckedCreateNestedManyWithoutParentInput
    drivers?: DriverProfileUncheckedCreateNestedManyWithoutRegionInput
    translations?: RegionTranslationUncheckedCreateNestedManyWithoutRegionInput
    orders?: OrderUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutParentInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutParentInput, RegionUncheckedCreateWithoutParentInput>
  }

  export type RegionCreateManyParentInputEnvelope = {
    data: RegionCreateManyParentInput | RegionCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type DriverProfileCreateWithoutRegionInput = {
    id?: string
    name?: string | null
    rating?: number
    status?: number
    user: UserCreateNestedOneWithoutDriverProfileInput
    cars?: CarCreateNestedManyWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    orders?: OrderCreateNestedManyWithoutDriverInput
    ratings?: RatingCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileUncheckedCreateWithoutRegionInput = {
    id?: string
    userId: string
    name?: string | null
    rating?: number
    status?: number
    cars?: CarUncheckedCreateNestedManyWithoutDriverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    orders?: OrderUncheckedCreateNestedManyWithoutDriverInput
    ratings?: RatingUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverProfileCreateOrConnectWithoutRegionInput = {
    where: DriverProfileWhereUniqueInput
    create: XOR<DriverProfileCreateWithoutRegionInput, DriverProfileUncheckedCreateWithoutRegionInput>
  }

  export type DriverProfileCreateManyRegionInputEnvelope = {
    data: DriverProfileCreateManyRegionInput | DriverProfileCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type RegionTranslationCreateWithoutRegionInput = {
    id?: string
    locale: string
    name: string
  }

  export type RegionTranslationUncheckedCreateWithoutRegionInput = {
    id?: string
    locale: string
    name: string
  }

  export type RegionTranslationCreateOrConnectWithoutRegionInput = {
    where: RegionTranslationWhereUniqueInput
    create: XOR<RegionTranslationCreateWithoutRegionInput, RegionTranslationUncheckedCreateWithoutRegionInput>
  }

  export type RegionTranslationCreateManyRegionInputEnvelope = {
    data: RegionTranslationCreateManyRegionInput | RegionTranslationCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutRegionInput = {
    id?: string
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    client?: ClientProfileCreateNestedOneWithoutOrdersInput
    driver?: DriverProfileCreateNestedOneWithoutOrdersInput
    car?: CarCreateNestedOneWithoutOrdersInput
    rating?: RatingCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRegionInput = {
    id?: string
    clientId?: string | null
    driverId?: string | null
    car_id?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
    rating?: RatingUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRegionInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRegionInput, OrderUncheckedCreateWithoutRegionInput>
  }

  export type OrderCreateManyRegionInputEnvelope = {
    data: OrderCreateManyRegionInput | OrderCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type RegionUpsertWithoutChildrenInput = {
    update: XOR<RegionUpdateWithoutChildrenInput, RegionUncheckedUpdateWithoutChildrenInput>
    create: XOR<RegionCreateWithoutChildrenInput, RegionUncheckedCreateWithoutChildrenInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutChildrenInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutChildrenInput, RegionUncheckedUpdateWithoutChildrenInput>
  }

  export type RegionUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parent?: RegionUpdateOneWithoutChildrenNestedInput
    drivers?: DriverProfileUpdateManyWithoutRegionNestedInput
    translations?: RegionTranslationUpdateManyWithoutRegionNestedInput
    orders?: OrderUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    drivers?: DriverProfileUncheckedUpdateManyWithoutRegionNestedInput
    translations?: RegionTranslationUncheckedUpdateManyWithoutRegionNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionUpsertWithWhereUniqueWithoutParentInput = {
    where: RegionWhereUniqueInput
    update: XOR<RegionUpdateWithoutParentInput, RegionUncheckedUpdateWithoutParentInput>
    create: XOR<RegionCreateWithoutParentInput, RegionUncheckedCreateWithoutParentInput>
  }

  export type RegionUpdateWithWhereUniqueWithoutParentInput = {
    where: RegionWhereUniqueInput
    data: XOR<RegionUpdateWithoutParentInput, RegionUncheckedUpdateWithoutParentInput>
  }

  export type RegionUpdateManyWithWhereWithoutParentInput = {
    where: RegionScalarWhereInput
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyWithoutParentInput>
  }

  export type RegionScalarWhereInput = {
    AND?: RegionScalarWhereInput | RegionScalarWhereInput[]
    OR?: RegionScalarWhereInput[]
    NOT?: RegionScalarWhereInput | RegionScalarWhereInput[]
    id?: StringFilter<"Region"> | string
    parent_id?: StringNullableFilter<"Region"> | string | null
    name?: StringFilter<"Region"> | string
    type?: EnumRegionTypeFilter<"Region"> | $Enums.RegionType
    latitude?: FloatNullableFilter<"Region"> | number | null
    longitude?: FloatNullableFilter<"Region"> | number | null
  }

  export type DriverProfileUpsertWithWhereUniqueWithoutRegionInput = {
    where: DriverProfileWhereUniqueInput
    update: XOR<DriverProfileUpdateWithoutRegionInput, DriverProfileUncheckedUpdateWithoutRegionInput>
    create: XOR<DriverProfileCreateWithoutRegionInput, DriverProfileUncheckedCreateWithoutRegionInput>
  }

  export type DriverProfileUpdateWithWhereUniqueWithoutRegionInput = {
    where: DriverProfileWhereUniqueInput
    data: XOR<DriverProfileUpdateWithoutRegionInput, DriverProfileUncheckedUpdateWithoutRegionInput>
  }

  export type DriverProfileUpdateManyWithWhereWithoutRegionInput = {
    where: DriverProfileScalarWhereInput
    data: XOR<DriverProfileUpdateManyMutationInput, DriverProfileUncheckedUpdateManyWithoutRegionInput>
  }

  export type DriverProfileScalarWhereInput = {
    AND?: DriverProfileScalarWhereInput | DriverProfileScalarWhereInput[]
    OR?: DriverProfileScalarWhereInput[]
    NOT?: DriverProfileScalarWhereInput | DriverProfileScalarWhereInput[]
    id?: StringFilter<"DriverProfile"> | string
    userId?: StringFilter<"DriverProfile"> | string
    name?: StringNullableFilter<"DriverProfile"> | string | null
    regionId?: StringNullableFilter<"DriverProfile"> | string | null
    rating?: FloatFilter<"DriverProfile"> | number
    status?: IntFilter<"DriverProfile"> | number
  }

  export type RegionTranslationUpsertWithWhereUniqueWithoutRegionInput = {
    where: RegionTranslationWhereUniqueInput
    update: XOR<RegionTranslationUpdateWithoutRegionInput, RegionTranslationUncheckedUpdateWithoutRegionInput>
    create: XOR<RegionTranslationCreateWithoutRegionInput, RegionTranslationUncheckedCreateWithoutRegionInput>
  }

  export type RegionTranslationUpdateWithWhereUniqueWithoutRegionInput = {
    where: RegionTranslationWhereUniqueInput
    data: XOR<RegionTranslationUpdateWithoutRegionInput, RegionTranslationUncheckedUpdateWithoutRegionInput>
  }

  export type RegionTranslationUpdateManyWithWhereWithoutRegionInput = {
    where: RegionTranslationScalarWhereInput
    data: XOR<RegionTranslationUpdateManyMutationInput, RegionTranslationUncheckedUpdateManyWithoutRegionInput>
  }

  export type RegionTranslationScalarWhereInput = {
    AND?: RegionTranslationScalarWhereInput | RegionTranslationScalarWhereInput[]
    OR?: RegionTranslationScalarWhereInput[]
    NOT?: RegionTranslationScalarWhereInput | RegionTranslationScalarWhereInput[]
    id?: StringFilter<"RegionTranslation"> | string
    region_id?: StringFilter<"RegionTranslation"> | string
    locale?: StringFilter<"RegionTranslation"> | string
    name?: StringFilter<"RegionTranslation"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutRegionInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRegionInput, OrderUncheckedUpdateWithoutRegionInput>
    create: XOR<OrderCreateWithoutRegionInput, OrderUncheckedCreateWithoutRegionInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRegionInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRegionInput, OrderUncheckedUpdateWithoutRegionInput>
  }

  export type OrderUpdateManyWithWhereWithoutRegionInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRegionInput>
  }

  export type CarCreateWithoutVehicle_typeInput = {
    id?: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    driver: DriverProfileCreateNestedOneWithoutCarsInput
    orders?: OrderCreateNestedManyWithoutCarInput
    media?: VehicleMediaCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutVehicle_typeInput = {
    id?: string
    driverId: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
    orders?: OrderUncheckedCreateNestedManyWithoutCarInput
    media?: VehicleMediaUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutVehicle_typeInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutVehicle_typeInput, CarUncheckedCreateWithoutVehicle_typeInput>
  }

  export type CarCreateManyVehicle_typeInputEnvelope = {
    data: CarCreateManyVehicle_typeInput | CarCreateManyVehicle_typeInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithWhereUniqueWithoutVehicle_typeInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutVehicle_typeInput, CarUncheckedUpdateWithoutVehicle_typeInput>
    create: XOR<CarCreateWithoutVehicle_typeInput, CarUncheckedCreateWithoutVehicle_typeInput>
  }

  export type CarUpdateWithWhereUniqueWithoutVehicle_typeInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutVehicle_typeInput, CarUncheckedUpdateWithoutVehicle_typeInput>
  }

  export type CarUpdateManyWithWhereWithoutVehicle_typeInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutVehicle_typeInput>
  }

  export type RegionCreateWithoutTranslationsInput = {
    id?: string
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    parent?: RegionCreateNestedOneWithoutChildrenInput
    children?: RegionCreateNestedManyWithoutParentInput
    drivers?: DriverProfileCreateNestedManyWithoutRegionInput
    orders?: OrderCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutTranslationsInput = {
    id?: string
    parent_id?: string | null
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
    children?: RegionUncheckedCreateNestedManyWithoutParentInput
    drivers?: DriverProfileUncheckedCreateNestedManyWithoutRegionInput
    orders?: OrderUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutTranslationsInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutTranslationsInput, RegionUncheckedCreateWithoutTranslationsInput>
  }

  export type RegionUpsertWithoutTranslationsInput = {
    update: XOR<RegionUpdateWithoutTranslationsInput, RegionUncheckedUpdateWithoutTranslationsInput>
    create: XOR<RegionCreateWithoutTranslationsInput, RegionUncheckedCreateWithoutTranslationsInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutTranslationsInput, RegionUncheckedUpdateWithoutTranslationsInput>
  }

  export type RegionUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parent?: RegionUpdateOneWithoutChildrenNestedInput
    children?: RegionUpdateManyWithoutParentNestedInput
    drivers?: DriverProfileUpdateManyWithoutRegionNestedInput
    orders?: OrderUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    children?: RegionUncheckedUpdateManyWithoutParentNestedInput
    drivers?: DriverProfileUncheckedUpdateManyWithoutRegionNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type CarCreateManyDriverInput = {
    id?: string
    vehicle_type_id: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
  }

  export type DocumentCreateManyDriverInput = {
    id?: string
    type: $Enums.DocumentType
    file_url: string
    status?: $Enums.DocumentStatus
    expires_at?: Date | string | null
  }

  export type OrderCreateManyDriverInput = {
    id?: string
    clientId?: string | null
    regionId?: string | null
    car_id?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
  }

  export type RatingCreateManyDriverInput = {
    id?: string
    order_id: string
    clientId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CarUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    vehicle_type?: VehicleTypeUpdateOneRequiredWithoutCarsNestedInput
    orders?: OrderUpdateManyWithoutCarNestedInput
    media?: VehicleMediaUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_type_id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    orders?: OrderUncheckedUpdateManyWithoutCarNestedInput
    media?: VehicleMediaUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_type_id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
  }

  export type DocumentUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    file_url?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    file_url?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    file_url?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientProfileUpdateOneWithoutOrdersNestedInput
    region?: RegionUpdateOneWithoutOrdersNestedInput
    car?: CarUpdateOneWithoutOrdersNestedInput
    rating?: RatingUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: RatingUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutRatingNestedInput
    client?: ClientProfileUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyAdminInput = {
    id?: string
    action: string
    target_entity?: string | null
    target_id?: string | null
    created_at?: Date | string
  }

  export type AuditLogUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_entity?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_entity?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_entity?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyClientInput = {
    id?: string
    regionId?: string | null
    driverId?: string | null
    car_id?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
  }

  export type RatingCreateManyClientInput = {
    id?: string
    order_id: string
    driverId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: RegionUpdateOneWithoutOrdersNestedInput
    driver?: DriverProfileUpdateOneWithoutOrdersNestedInput
    car?: CarUpdateOneWithoutOrdersNestedInput
    rating?: RatingUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: RatingUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutRatingNestedInput
    driver?: DriverProfileUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyCarInput = {
    id?: string
    clientId?: string | null
    regionId?: string | null
    driverId?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
  }

  export type VehicleMediaCreateManyCarInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientProfileUpdateOneWithoutOrdersNestedInput
    region?: RegionUpdateOneWithoutOrdersNestedInput
    driver?: DriverProfileUpdateOneWithoutOrdersNestedInput
    rating?: RatingUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: RatingUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleMediaUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleMediaUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleMediaUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionCreateManyParentInput = {
    id?: string
    name: string
    type: $Enums.RegionType
    latitude?: number | null
    longitude?: number | null
  }

  export type DriverProfileCreateManyRegionInput = {
    id?: string
    userId: string
    name?: string | null
    rating?: number
    status?: number
  }

  export type RegionTranslationCreateManyRegionInput = {
    id?: string
    locale: string
    name: string
  }

  export type OrderCreateManyRegionInput = {
    id?: string
    clientId?: string | null
    driverId?: string | null
    car_id?: string | null
    name?: string | null
    from_address: string
    to_address: string
    distance?: number | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    trip_datetime: Date | string
    notes?: string | null
    passenger_count: number
    flight_number?: string | null
  }

  export type RegionUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    children?: RegionUpdateManyWithoutParentNestedInput
    drivers?: DriverProfileUpdateManyWithoutRegionNestedInput
    translations?: RegionTranslationUpdateManyWithoutRegionNestedInput
    orders?: OrderUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    children?: RegionUncheckedUpdateManyWithoutParentNestedInput
    drivers?: DriverProfileUncheckedUpdateManyWithoutRegionNestedInput
    translations?: RegionTranslationUncheckedUpdateManyWithoutRegionNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRegionTypeFieldUpdateOperationsInput | $Enums.RegionType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DriverProfileUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDriverProfileNestedInput
    cars?: CarUpdateManyWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    orders?: OrderUpdateManyWithoutDriverNestedInput
    ratings?: RatingUpdateManyWithoutDriverNestedInput
  }

  export type DriverProfileUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    cars?: CarUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDriverNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverProfileUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
  }

  export type RegionTranslationUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionTranslationUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionTranslationUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientProfileUpdateOneWithoutOrdersNestedInput
    driver?: DriverProfileUpdateOneWithoutOrdersNestedInput
    car?: CarUpdateOneWithoutOrdersNestedInput
    rating?: RatingUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: RatingUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    trip_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_count?: IntFieldUpdateOperationsInput | number
    flight_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarCreateManyVehicle_typeInput = {
    id?: string
    driverId: string
    brand: string
    model: string
    year: number
    color?: string | null
    license_plate: string
    verification_status?: $Enums.VehicleVerificationStatus
  }

  export type CarUpdateWithoutVehicle_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    driver?: DriverProfileUpdateOneRequiredWithoutCarsNestedInput
    orders?: OrderUpdateManyWithoutCarNestedInput
    media?: VehicleMediaUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutVehicle_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
    orders?: OrderUncheckedUpdateManyWithoutCarNestedInput
    media?: VehicleMediaUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutVehicle_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: StringFieldUpdateOperationsInput | string
    verification_status?: EnumVehicleVerificationStatusFieldUpdateOperationsInput | $Enums.VehicleVerificationStatus
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