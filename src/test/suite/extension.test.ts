import * as assert from 'assert';
import * as vscode from 'vscode';
import { rollDice } from '../../extension';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('rollDice', () => {
        Array.from(Array(10)).forEach(() => {
            const result = rollDice();
            assert.strictEqual(true, result < 1 !== true && result > 6 !== true);
        });
    });
});
