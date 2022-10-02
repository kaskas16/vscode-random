import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "vscode-random" is now active!');
    let disposable = vscode.commands.registerCommand('vscode-random.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from vscode-random!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
