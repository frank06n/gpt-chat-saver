# gpt-chat-saver

**Version** - 1.1.0

Patched to work on the current version of ChatGPT website (as of 01/11/23)

### Known following problems:
- If you have a branched prompt (alternate prompts in a single chat message),
only the opened branch is saved (which is by default the latest one.)

_~~minor issues_
- Dark theme doesn't work
- Non-functional buttons appear (functionality might be added in future)

## Instructions:
Step 1. Copy the code from [here](https://raw.githubusercontent.com/frank06n/gpt-chat-saver/main/gpt-saver.js).

Step 2. Open any of your chats at chat.openai.com, Open Developer Tools > Console

Step 3. Paste the code, (if you want modify options), then hit Enter

## Options:
1. `DOWNLOAD_CSS` - Whether to download the css file of ChatGpt website
    - `true`  - Download the styles and add it to the file. **(Recommended, Default)**
    - `false` - Link to the styles used in page. _(Lesser file size, but link may not work in future)_
