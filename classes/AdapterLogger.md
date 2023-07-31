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

[src/adapter-logger.ts:57](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/adapter-logger.ts#L57)

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

[src/adapter-logger.ts:39](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/adapter-logger.ts#L39)

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

[src/adapter-logger.ts:45](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/adapter-logger.ts#L45)

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

[src/adapter-logger.ts:69](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/adapter-logger.ts#L69)

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

[src/adapter-logger.ts:63](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/adapter-logger.ts#L63)

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

[src/adapter-logger.ts:51](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/adapter-logger.ts#L51)
