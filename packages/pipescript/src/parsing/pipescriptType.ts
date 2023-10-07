import ts, { PseudoBigInt } from 'typescript';

import { PipescriptType } from '../types';

export const getPipescriptType = (
    file: ts.SourceFile,
    type: undefined | ts.Type,
): PipescriptType => {
    if (!type) {
        return {
            kind: `unknown`,
        };
    }

    if (type.isLiteral()) {
        const getValueType = (value: string | number | PseudoBigInt) => {
            // console.log(`getValueType`, { value });
            if (typeof value === `object`) {
                // BigInt
                return `int`;
            }

            return typeof value === `string`
                ? `string`
                : Number.parseInt(value + ``, 10) === value
                ? `int`
                : `float`;
        };

        return {
            kind: `simple`,
            type: getValueType(type.value),
        };

        // return {
        //     kind: `literal`,
        //     value: type.value as string,
        //     type: getValueType(type.value),
        // };
    }

    // console.log(`getType`, {
    //     flagsRaw: type?.flags,
    //     flags: ts.TypeFlags[type.flags],
    // });
    if (type.flags & ts.TypeFlags.String) {
        return {
            kind: `simple`,
            type: `string`,
        };
    }
    if (type.flags & ts.TypeFlags.Number) {
        return {
            kind: `simple`,
            type: `number`,
        };
    }
    if (type.flags & ts.TypeFlags.Boolean) {
        return {
            kind: `simple`,
            type: `bool`,
        };
    }

    console.log(`getType: UNKNOWN type`, {
        flags: ts.TypeFlags[type?.flags ?? 0],
        flagsRaw: type?.flags,
    });

    return {
        kind: `type`,
        name: type.pattern?.getText(file) ?? ``,
    };
};
