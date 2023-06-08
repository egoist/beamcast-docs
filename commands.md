# Commands

Commands are the main way to interact with Beamcast. They are used to send messages to ChatGPT API, process the selected text and show the result.

You can view, edit, and create commands on https://beamcast.app/dashboard.

## Create a command

A command is made of a title and a prompt. The title is used to identify the command in panel when you select text. The prompt is the message sent to ChatGPT API.

For example, you can create a command to generate a poem based on selected text:

- **Title**: Generate a poem
- **Prompt**: Generated a poem based on the selected text, the poem must be sarcastic.

After adding it, you can select text and use it to generate a poem:

<VideoPlayer src="https://fastly.jsdelivr.net/gh/egoist-bot/images@main/uPic/GZoNxM.mp4" loop />

## Selected text

Beamcast automatically injects the selected text into the request being sent to ChatGPT API, you can use refer the the selected text using "the text" or "the selected text" in the prompt. For example:

```
Generate a poem based on the selected text.
```

You can also refer to it using other languages, for example you can use Chinese too:

```
基于所选文本生成一首诗。
```

## Prompt variables

You can use variables in the command prompt to access some specifial data:

- `my_language`: The default language setting in your browser.
- `text_language`: The language of the selected text.

The way you use variables is to wrap them with double curly braces, for example:

```
Translate the text into {{my_language}}.
```
