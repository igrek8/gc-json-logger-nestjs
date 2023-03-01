[gc-json-logger-nestjs](../README.md) / [Exports](../modules.md) / LoggerModule

# Class: LoggerModule

## Hierarchy

- `ConfigurableModuleClass`

  ↳ **`LoggerModule`**

## Implements

- `NestModule`

## Table of contents

### Methods

- [configure](LoggerModule.md#configure)

### Constructors

- [constructor](LoggerModule.md#constructor)

### Properties

- [register](LoggerModule.md#register)
- [registerAsync](LoggerModule.md#registerasync)

## Methods

### configure

▸ **configure**(`consumer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | `MiddlewareConsumer` |

#### Returns

`void`

#### Implementation of

NestModule.configure

#### Defined in

[src/logger.module.ts:31](https://github.com/igrek8/gc-json-logger-nestjs/blob/3fa2119/src/logger.module.ts#L31)

## Constructors

### constructor

• **new LoggerModule**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LoggerModuleOptions`](../interfaces/LoggerModuleOptions.md) & `Partial`<{ `global`: `boolean` = true }\> |

#### Overrides

ConfigurableModuleClass.constructor

#### Defined in

[src/logger.module.ts:27](https://github.com/igrek8/gc-json-logger-nestjs/blob/3fa2119/src/logger.module.ts#L27)

## Properties

### register

▪ `Static` **register**: (`options`: [`LoggerModuleOptions`](../interfaces/LoggerModuleOptions.md) & `Partial`<{ `global`: `boolean` = true }\>) => `DynamicModule`

#### Type declaration

▸ (`options`): `DynamicModule`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LoggerModuleOptions`](../interfaces/LoggerModuleOptions.md) & `Partial`<{ `global`: `boolean` = true }\> |

##### Returns

`DynamicModule`

#### Inherited from

ConfigurableModuleClass.register

___

### registerAsync

▪ `Static` **registerAsync**: (`options`: `ConfigurableModuleAsyncOptions`<[`LoggerModuleOptions`](../interfaces/LoggerModuleOptions.md), ``"create"``\> & `Partial`<{ `global`: `boolean` = true }\>) => `DynamicModule`

#### Type declaration

▸ (`options`): `DynamicModule`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConfigurableModuleAsyncOptions`<[`LoggerModuleOptions`](../interfaces/LoggerModuleOptions.md), ``"create"``\> & `Partial`<{ `global`: `boolean` = true }\> |

##### Returns

`DynamicModule`

#### Inherited from

ConfigurableModuleClass.registerAsync
