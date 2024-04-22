"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ActivityEnd: () => ActivityEnd,
  ActivityPause: () => ActivityPause,
  ActivityResume: () => ActivityResume,
  ActivityStart: () => ActivityStart,
  AppFocusGained: () => AppFocusGained,
  AppFocusLost: () => AppFocusLost,
  ComputerAwake: () => ComputerAwake,
  ComputerSleep: () => ComputerSleep,
  DocumentShared: () => DocumentShared,
  EmailReceived: () => EmailReceived,
  EmailSent: () => EmailSent,
  EventManager: () => EventManager,
  EventName: () => EventName,
  EventTopic: () => EventTopic,
  FieldType: () => FieldType,
  FileClosed: () => FileClosed,
  FileEdited: () => FileEdited,
  FileOpened: () => FileOpened,
  FileSaved: () => FileSaved,
  MeetingEnd: () => MeetingEnd,
  MeetingStart: () => MeetingStart,
  MessageReceived: () => MessageReceived,
  MessageSent: () => MessageSent,
  ProjectSwitch: () => ProjectSwitch,
  SessionEnd: () => SessionEnd,
  SystemError: () => SystemError,
  SystemShutdown: () => SystemShutdown,
  SystemStartup: () => SystemStartup,
  TaskCompleted: () => TaskCompleted,
  TaskCreated: () => TaskCreated,
  TaskModified: () => TaskModified,
  railMenu: () => railMenu
});
module.exports = __toCommonJS(src_exports);

// src/events/event-manager.ts
var _EventManager = class _EventManager {
  static registerEvent(eventName) {
    _EventManager.events.set(eventName, []);
  }
  static subscribe(eventName, callback) {
    if (!_EventManager.events.has(eventName)) {
      console.warn(`Event ${eventName} is not registered.`);
      return;
    }
    _EventManager.events.get(eventName).push(callback);
  }
  static publish(eventName, data) {
    if (!_EventManager.events.has(eventName)) {
      console.error(`No subscribers for the event: ${eventName}`);
      return;
    }
    for (const callback of _EventManager.events.get(eventName)) {
      callback(data);
    }
  }
};
__publicField(_EventManager, "events", /* @__PURE__ */ new Map());
var EventManager = _EventManager;

// src/events/events.ts
var EventName = /* @__PURE__ */ ((EventName2) => {
  EventName2["UserLogin"] = "UserLogin";
  EventName2["UserLogout"] = "UserLogout";
  EventName2["SessionStart"] = "SessionStart";
  EventName2["SessionEnd"] = "SessionEnd";
  EventName2["ComputerAwake"] = "ComputerAwake";
  EventName2["ComputerSleep"] = "ComputerSleep";
  EventName2["SystemShutdown"] = "SystemShutdown";
  EventName2["SystemStartup"] = "SystemStartup";
  EventName2["AppFocusGained"] = "AppFocusGained";
  EventName2["AppFocusLost"] = "AppFocusLost";
  EventName2["ActivityStart"] = "ActivityStart";
  EventName2["ActivityPause"] = "ActivityPause";
  EventName2["ActivityResume"] = "ActivityResume";
  EventName2["ActivityEnd"] = "ActivityEnd";
  EventName2["FileOpened"] = "FileOpened";
  EventName2["FileClosed"] = "FileClosed";
  EventName2["FileEdited"] = "FileEdited";
  EventName2["FileSaved"] = "FileSaved";
  EventName2["EmailSent"] = "EmailSent";
  EventName2["EmailReceived"] = "EmailReceived";
  EventName2["MessageSent"] = "MessageSent";
  EventName2["MessageReceived"] = "MessageReceived";
  EventName2["TaskCreated"] = "TaskCreated";
  EventName2["TaskModified"] = "TaskModified";
  EventName2["TaskCompleted"] = "TaskCompleted";
  EventName2["ProjectSwitch"] = "ProjectSwitch";
  EventName2["MeetingStart"] = "MeetingStart";
  EventName2["MeetingEnd"] = "MeetingEnd";
  EventName2["DocumentShared"] = "DocumentShared";
  EventName2["SystemError"] = "SystemError";
  EventName2["UserAlert"] = "UserAlert";
  return EventName2;
})(EventName || {});
var EventTopic = /* @__PURE__ */ ((EventTopic2) => {
  EventTopic2["UserLogin"] = "system/user/login";
  EventTopic2["UserLogout"] = "system/user/logout";
  EventTopic2["SessionStart"] = "system/session/start";
  EventTopic2["SessionEnd"] = "system/session/end";
  EventTopic2["ComputerAwake"] = "system/computer/awake";
  EventTopic2["ComputerSleep"] = "system/computer/sleep";
  EventTopic2["SystemShutdown"] = "system/computer/shutdown";
  EventTopic2["SystemStartup"] = "system/computer/startup";
  EventTopic2["AppFocusGained"] = "application/focus/gained";
  EventTopic2["AppFocusLost"] = "application/focus/lost";
  EventTopic2["ActivityStart"] = "activity/start";
  EventTopic2["ActivityPause"] = "activity/pause";
  EventTopic2["ActivityResume"] = "activity/resume";
  EventTopic2["ActivityEnd"] = "activity/end";
  EventTopic2["FileOpened"] = "file/opened";
  EventTopic2["FileClosed"] = "file/closed";
  EventTopic2["FileEdited"] = "file/edited";
  EventTopic2["FileSaved"] = "file/saved";
  EventTopic2["EmailSent"] = "communication/email/sent";
  EventTopic2["EmailReceived"] = "communication/email/received";
  EventTopic2["MessageSent"] = "communication/message/sent";
  EventTopic2["MessageReceived"] = "communication/message/received";
  EventTopic2["TaskCreated"] = "task/created";
  EventTopic2["TaskModified"] = "task/modified";
  EventTopic2["TaskCompleted"] = "task/completed";
  EventTopic2["ProjectSwitch"] = "project/switch";
  EventTopic2["MeetingStart"] = "meeting/start";
  EventTopic2["MeetingEnd"] = "meeting/end";
  EventTopic2["DocumentShared"] = "document/shared";
  EventTopic2["SystemError"] = "system/error";
  EventTopic2["UserAlert"] = "system/alert";
  return EventTopic2;
})(EventTopic || {});
var SessionEnd = {
  name: "SessionEnd" /* SessionEnd */,
  description: "When a session ends due to logout or system shutdown.",
  topic: "system/session/end" /* SessionEnd */,
  source: "agent"
};
var ComputerAwake = {
  name: "ComputerAwake" /* ComputerAwake */,
  description: "When the computer wakes from sleep mode.",
  topic: "system/computer/awake" /* ComputerAwake */,
  source: "agent"
};
var ComputerSleep = {
  name: "ComputerSleep" /* ComputerSleep */,
  description: "When the computer enters sleep mode.",
  topic: "system/computer/sleep" /* ComputerSleep */,
  source: "agent"
};
var SystemShutdown = {
  name: "SystemShutdown" /* SystemShutdown */,
  description: "Triggered when the system is shutting down.",
  topic: "system/computer/shutdown" /* SystemShutdown */,
  source: "agent"
};
var SystemStartup = {
  name: "SystemStartup" /* SystemStartup */,
  description: "Triggered when the system boots up.",
  topic: "system/computer/startup" /* SystemStartup */,
  source: "agent"
};
var AppFocusGained = {
  name: "AppFocusGained" /* AppFocusGained */,
  description: "When any application window gains focus.",
  topic: "application/focus/gained" /* AppFocusGained */,
  source: "agent"
};
var AppFocusLost = {
  name: "AppFocusLost" /* AppFocusLost */,
  description: "When any application window loses focus.",
  topic: "application/focus/lost" /* AppFocusLost */,
  source: "agent"
};
var ActivityStart = {
  name: "ActivityStart" /* ActivityStart */,
  description: "Marks the beginning of a specific activity.",
  topic: "activity/start" /* ActivityStart */,
  source: "agent"
};
var ActivityPause = {
  name: "ActivityPause" /* ActivityPause */,
  description: "When an activity is paused.",
  topic: "activity/pause" /* ActivityPause */,
  source: "agent"
};
var ActivityResume = {
  name: "ActivityResume" /* ActivityResume */,
  description: "When a paused activity is resumed.",
  topic: "activity/resume" /* ActivityResume */,
  source: "agent"
};
var ActivityEnd = {
  name: "ActivityEnd" /* ActivityEnd */,
  description: "Marks the end of an activity.",
  topic: "activity/end" /* ActivityEnd */,
  source: "agent"
};
var FileOpened = {
  name: "FileOpened" /* FileOpened */,
  description: "When a file is opened.",
  topic: "file/opened" /* FileOpened */,
  source: "agent"
};
var FileClosed = {
  name: "FileClosed" /* FileClosed */,
  description: "When a file is closed.",
  topic: "file/closed" /* FileClosed */,
  source: "agent"
};
var FileEdited = {
  name: "FileEdited" /* FileEdited */,
  description: "When a file is edited.",
  topic: "file/edited" /* FileEdited */,
  source: "agent"
};
var FileSaved = {
  name: "FileSaved" /* FileSaved */,
  description: "When changes to a file are saved.",
  topic: "file/saved" /* FileSaved */,
  source: "agent"
};
var EmailSent = {
  name: "EmailSent" /* EmailSent */,
  description: "When an email is sent.",
  topic: "communication/email/sent" /* EmailSent */,
  source: "agent"
};
var EmailReceived = {
  name: "EmailReceived" /* EmailReceived */,
  description: "When an email is received.",
  topic: "communication/email/received" /* EmailReceived */,
  source: "agent"
};
var MessageSent = {
  name: "MessageSent" /* MessageSent */,
  description: "When a message is sent via any messaging platform.",
  topic: "communication/message/sent" /* MessageSent */,
  source: "agent"
};
var MessageReceived = {
  name: "MessageReceived" /* MessageReceived */,
  description: "When a message is received.",
  topic: "communication/message/received" /* MessageReceived */,
  source: "agent"
};
var TaskCreated = {
  name: "TaskCreated" /* TaskCreated */,
  description: "When a new task is created.",
  topic: "task/created" /* TaskCreated */,
  source: "agent"
};
var TaskModified = {
  name: "TaskModified" /* TaskModified */,
  description: "When a task is modified.",
  topic: "task/modified" /* TaskModified */,
  source: "agent"
};
var TaskCompleted = {
  name: "TaskCompleted" /* TaskCompleted */,
  description: "When a task is completed.",
  topic: "task/completed" /* TaskCompleted */,
  source: "agent"
};
var ProjectSwitch = {
  name: "ProjectSwitch" /* ProjectSwitch */,
  description: "When switching from working on one project to another.",
  topic: "project/switch" /* ProjectSwitch */,
  source: "agent"
};
var MeetingStart = {
  name: "MeetingStart" /* MeetingStart */,
  description: "When a meeting starts.",
  topic: "meeting/start" /* MeetingStart */,
  source: "agent"
};
var MeetingEnd = {
  name: "MeetingEnd" /* MeetingEnd */,
  description: "When a meeting ends.",
  topic: "meeting/end" /* MeetingEnd */,
  source: "agent"
};
var DocumentShared = {
  name: "DocumentShared" /* DocumentShared */,
  description: "When a document is shared with the team.",
  topic: "document/shared" /* DocumentShared */,
  source: "agent"
};
var SystemError = {
  name: "SystemError" /* SystemError */,
  description: "When an error occurs within the system.",
  topic: "system/error" /* SystemError */,
  source: "agent"
};

// src/schema/index.ts
var FieldType = /* @__PURE__ */ ((FieldType2) => {
  FieldType2["INTEGER"] = "INTEGER";
  FieldType2["TEXT"] = "TEXT";
  FieldType2["REAL"] = "REAL";
  FieldType2["BLOB"] = "BLOB";
  FieldType2["BOOLEAN"] = "BOOLEAN";
  FieldType2["DATE"] = "DATE";
  FieldType2["DATETIME"] = "DATETIME";
  FieldType2["TIMESTAMP"] = "TIMESTAMP";
  return FieldType2;
})(FieldType || {});

// src/ui/rail-menu.ts
var RailMenu = class {
  constructor() {
    __publicField(this, "items", []);
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(path) {
    this.items = this.items.filter((item) => item.path !== path);
  }
  updateItem(path, newItem) {
    const index = this.items.findIndex((item) => item.path === path);
    if (index !== -1) {
      this.items[index] = newItem;
    }
  }
  getItems() {
    return this.items;
  }
};
var railMenu = new RailMenu();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActivityEnd,
  ActivityPause,
  ActivityResume,
  ActivityStart,
  AppFocusGained,
  AppFocusLost,
  ComputerAwake,
  ComputerSleep,
  DocumentShared,
  EmailReceived,
  EmailSent,
  EventManager,
  EventName,
  EventTopic,
  FieldType,
  FileClosed,
  FileEdited,
  FileOpened,
  FileSaved,
  MeetingEnd,
  MeetingStart,
  MessageReceived,
  MessageSent,
  ProjectSwitch,
  SessionEnd,
  SystemError,
  SystemShutdown,
  SystemStartup,
  TaskCompleted,
  TaskCreated,
  TaskModified,
  railMenu
});
