import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('vscode-random.rollDice', () => {
        const result = rollDice();
        vscode.window.showInformationMessage(`Dice rolled a ${result}.`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }

export function rollDice(): number {
    return 1 + Math.floor(Math.random() * 6);
}
