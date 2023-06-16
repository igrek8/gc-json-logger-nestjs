[gc-json-logger-nestjs](../README.md) / [Exports](../modules.md) / AdapterLoggerService

# Class: AdapterLoggerService

Nest.js compatible logger

## Implements

- `LoggerService`

## Table of contents

### Constructors

- [constructor](AdapterLoggerService.md#constructor)

### Methods

- [debug](AdapterLoggerService.md#debug)
- [error](AdapterLoggerService.md#error)
- [log](AdapterLoggerService.md#log)
- [setLogLevels](AdapterLoggerService.md#setloglevels)
- [verbose](AdapterLoggerService.md#verbose)
- [warn](AdapterLoggerService.md#warn)

## Constructors

### constructor

• **new AdapterLoggerService**()

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

[src/adapter-logger.service.ts:57](https://github.com/igrek8/gc-json-logger-nestjs/blob/1ae0acb/src/adapter-logger.service.ts#L57)

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

[src/adapter-logger.service.ts:39](https://github.com/igrek8/gc-json-logger-nestjs/blob/1ae0acb/src/adapter-logger.service.ts#L39)

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

[src/adapter-logger.service.ts:45](https://github.com/igrek8/gc-json-logger-nestjs/blob/1ae0acb/src/adapter-logger.service.ts#L45)

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

[src/adapter-logger.service.ts:69](https://github.com/igrek8/gc-json-logger-nestjs/blob/1ae0acb/src/adapter-logger.service.ts#L69)

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

[src/adapter-logger.service.ts:63](https://github.com/igrek8/gc-json-logger-nestjs/blob/1ae0acb/src/adapter-logger.service.ts#L63)

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

[src/adapter-logger.service.ts:51](https://github.com/igrek8/gc-json-logger-nestjs/blob/1ae0acb/src/adapter-logger.service.ts#L51)
