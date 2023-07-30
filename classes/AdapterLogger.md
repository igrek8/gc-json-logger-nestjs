[gc-json-logger-nestjs](../README.md) / [Exports](../modules.md) / AdapterLogger

# Class: AdapterLogger

Nest.js compatible logger

## Implements

- `LoggerService`

## Table of contents

### Constructors

- [constructor](AdapterLogger.md#constructor)

### Methods

- [debug](AdapterLogger.md#debug)
- [error](AdapterLogger.md#error)
- [log](AdapterLogger.md#log)
- [setLogLevels](AdapterLogger.md#setloglevels)
- [verbose](AdapterLogger.md#verbose)
- [warn](AdapterLogger.md#warn)

## Constructors

### constructor

• **new AdapterLogger**()

## Methods

### debug

▸ **debug**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.debug

#### Defined in

[src/adapter-logger.ts:56](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/adapter-logger.ts#L56)

___

### error

▸ **error**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.error

#### Defined in

[src/adapter-logger.ts:38](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/adapter-logger.ts#L38)

___

### log

▸ **log**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.log

#### Defined in

[src/adapter-logger.ts:44](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/adapter-logger.ts#L44)

___

### setLogLevels

▸ **setLogLevels**(`levels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `levels` | `LogLevel`[] |

#### Returns

`void`

#### Implementation of

LoggerService.setLogLevels

#### Defined in

[src/adapter-logger.ts:68](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/adapter-logger.ts#L68)

___

### verbose

▸ **verbose**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.verbose

#### Defined in

[src/adapter-logger.ts:62](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/adapter-logger.ts#L62)

___

### warn

▸ **warn**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.warn

#### Defined in

[src/adapter-logger.ts:50](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/adapter-logger.ts#L50)
