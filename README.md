# File Read Marker for Visual Studio Code

File Read Marker is a Visual Studio Code extension that helps you mark files in your Explorer folders as read or unread with a simple double-click. Keep track of the files you've read and easily identify the ones you haven't, improving your workflow and organization.

## Features

- Mark files as read or unread with a double-click in the Explorer.
- Visual indication of read and unread files in the Explorer folders.
- Automatically saves the read/unread status for each file in your workspace.

## Getting Started

1. Install the File Read Marker extension from the Visual Studio Code Marketplace.
2. Open a folder or workspace in Visual Studio Code.
3. Navigate to the Explorer view.
4. Double-click a file to toggle its read/unread status. Files marked as read will have a visual indication, such as a checkmark icon.

## Configuration

The File Read Marker extension works out of the box with default settings. If you want to customize the extension, you can do so by modifying the following settings in your Visual Studio Code `settings.json` file:

```json
{
  // Change the icon for read files (use any valid file icon from VSCode's product icon theme)
  "fileReadMarker.readIcon": "check",

  // Change the color of the read icon (use any valid CSS color value)
  "fileReadMarker.readIconColor": "green"
}

## License

This extension is licensed under the [MIT License](./LICENSE).