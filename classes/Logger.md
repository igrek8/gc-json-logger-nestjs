[gc-json-logger-nestjs](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

## Implements

- `ILogger`

## Table of contents

### Methods

- [alert](Logger.md#alert)
- [critical](Logger.md#critical)
- [debug](Logger.md#debug)
- [default](Logger.md#default)
- [emergency](Logger.md#emergency)
- [error](Logger.md#error)
- [getLabels](Logger.md#getlabels)
- [getName](Logger.md#getname)
- [info](Logger.md#info)
- [log](Logger.md#log)
- [notice](Logger.md#notice)
- [setLabels](Logger.md#setlabels)
- [warning](Logger.md#warning)

### Constructors

- [constructor](Logger.md#constructor)

## Methods

### alert

▸ **alert**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.alert

#### Defined in

[src/logger.ts:70](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L70)

___

### critical

▸ **critical**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.critical

#### Defined in

[src/logger.ts:62](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L62)

___

### debug

▸ **debug**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.debug

#### Defined in

[src/logger.ts:22](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L22)

___

### default

▸ **default**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.default

#### Defined in

[src/logger.ts:14](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L14)

___

### emergency

▸ **emergency**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.emergency

#### Defined in

[src/logger.ts:78](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L78)

___

### error

▸ **error**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.error

#### Defined in

[src/logger.ts:54](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L54)

___

### getLabels

▸ **getLabels**(): `Record`<`string`, `undefined` \| `string`\>

#### Returns

`Record`<`string`, `undefined` \| `string`\>

#### Implementation of

ILogger.getLabels

#### Defined in

[src/logger.ts:90](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L90)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

ILogger.getName

#### Defined in

[src/logger.ts:94](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L94)

___

### info

▸ **info**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.info

#### Defined in

[src/logger.ts:30](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L30)

___

### log

▸ **log**(`severity`, `message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `severity` | `Severity` |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.log

#### Defined in

[src/logger.ts:6](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L6)

___

### notice

▸ **notice**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.notice

#### Defined in

[src/logger.ts:38](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L38)

___

### setLabels

▸ **setLabels**(`labels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `labels` | `Record`<`string`, `undefined` \| `string`\> |

#### Returns

`void`

#### Implementation of

ILogger.setLabels

#### Defined in

[src/logger.ts:86](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L86)

___

### warning

▸ **warning**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.warning

#### Defined in

[src/logger.ts:46](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L46)

## Constructors

### constructor

• **new Logger**(`context?`, `labels?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `string` |
| `labels` | `Record`<`string`, `undefined` \| `string`\> |

#### Defined in

[src/logger.ts:4](https://github.com/igrek8/gc-json-logger-nestjs/blob/b1f7ddb/src/logger.ts#L4)
