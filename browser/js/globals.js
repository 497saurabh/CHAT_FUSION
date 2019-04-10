const electron = require('electron');
const { Menu, MenuItem } = electron.remote;
const ipcRenderer = electron.ipcRenderer;
const DUMMY_CHAT_ID = 'fake id';
const MSG_INPUT_SELECTOR = '.new-message form textarea';
const CHAT_WINDOW_SELECTOR = '.chat .messages';
const URL_REGEX = new RegExp(/(http:\/\/|https:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'i');

var loadingAllMessages = false;

window.chats = [];
window.chatListHash = {};
window.chatCache = {};
window.unreadChats = {};
window.chat = {};
window.chatUsers = {};
window.currentChatId = null;
window.notifiedChatId = null;
window.loggedInUserId = null;
window.loggedInUser = null;
window.shouldSendSeenFlags = true;
window.isWindowFocused = true;
window.shouldNotify = true;
window.olderMessages = [];
window.gettingOlderMessages = false;
window.olderMessagesChatId = null;
