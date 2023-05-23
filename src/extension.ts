// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


function isFileRead(context: vscode.ExtensionContext, uri: vscode.Uri): boolean {
	const readStatus = context.workspaceState.get<boolean>(uri.fsPath, false);
	return readStatus;
  }
  
  // vscode doesn't support custom icons or labels 
  // https://github.com/microsoft/vscode/issues/62104
  async function toggleReadStatus(context: vscode.ExtensionContext, uri: vscode.Uri): Promise<void> {
	// const currentStatus = isFileRead(context, uri);
	// const newStatus = !currentStatus;
	// await context.workspaceState.update(uri.fsPath, newStatus);

    const oldName = uri.path.split('/').pop() as string;
	const items = oldName.split(".");
	const icon = "      ☑";
	var newName = items[0] + icon;
	if (items.length === 2) {
		newName = newName + "." + items[1];
	}
	if (oldName.indexOf(icon) >= 0) {
		newName = oldName.replace(icon, "");
	}

    const newUri = uri.with({ path: uri.path.replace(oldName + "", newName) });
	await vscode.workspace.fs.rename(uri, newUri, { overwrite: false });
  }

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
	  'myExtension.toggleReadStatus',
	  async (uri: vscode.Uri) => {
		await toggleReadStatus(context, uri);
		// const newStatus = isFileRead(context, uri);
		// vscode.window.showInformationMessage(`File marked as ${newStatus ? 'read' : 'unread'}`);
	  }
	);
  
	context.subscriptions.push(disposable);
  }

// This method is called when your extension is deactivated
export function deactivate() {}
