"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    roots: ['<rootDir>/src'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    transform: {
        '.+\\.ts$': 'ts-jest',
    },
    testEnvironment: 'node',
};
