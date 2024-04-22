// Interfaces for event structure
export interface Event {
    name: EventName;
    description: string;
    topic: EventTopic;
    source: string;
    public?: boolean;
}

// Enum for event names
export enum EventName {
    UserLogin = "UserLogin",
    UserLogout = "UserLogout",
    SessionStart = "SessionStart",
    SessionEnd = "SessionEnd",
    ComputerAwake = "ComputerAwake",
    ComputerSleep = "ComputerSleep",
    SystemShutdown = "SystemShutdown",
    SystemStartup = "SystemStartup",
    AppFocusGained = "AppFocusGained",
    AppFocusLost = "AppFocusLost",
    ActivityStart = "ActivityStart",
    ActivityPause = "ActivityPause",
    ActivityResume = "ActivityResume",
    ActivityEnd = "ActivityEnd",
    FileOpened = "FileOpened",
    FileClosed = "FileClosed",
    FileEdited = "FileEdited",
    FileSaved = "FileSaved",
    EmailSent = "EmailSent",
    EmailReceived = "EmailReceived",
    MessageSent = "MessageSent",
    MessageReceived = "MessageReceived",
    TaskCreated = "TaskCreated",
    TaskModified = "TaskModified",
    TaskCompleted = "TaskCompleted",
    ProjectSwitch = "ProjectSwitch",
    MeetingStart = "MeetingStart",
    MeetingEnd = "MeetingEnd",
    DocumentShared = "DocumentShared",
    SystemError = "SystemError",
    UserAlert = "UserAlert"
}

// Enum for topics
export enum EventTopic {
    UserLogin = "system/user/login",
    UserLogout = "system/user/logout",
    SessionStart = "system/session/start",
    SessionEnd = "system/session/end",
    ComputerAwake = "system/computer/awake",
    ComputerSleep = "system/computer/sleep",
    SystemShutdown = "system/computer/shutdown",
    SystemStartup = "system/computer/startup",
    AppFocusGained = "application/focus/gained",
    AppFocusLost = "application/focus/lost",
    ActivityStart = "activity/start",
    ActivityPause = "activity/pause",
    ActivityResume = "activity/resume",
    ActivityEnd = "activity/end",
    FileOpened = "file/opened",
    FileClosed = "file/closed",
    FileEdited = "file/edited",
    FileSaved = "file/saved",
    EmailSent = "communication/email/sent",
    EmailReceived = "communication/email/received",
    MessageSent = "communication/message/sent",
    MessageReceived = "communication/message/received",
    TaskCreated = "task/created",
    TaskModified = "task/modified",
    TaskCompleted = "task/completed",
    ProjectSwitch = "project/switch",
    MeetingStart = "meeting/start",
    MeetingEnd = "meeting/end",
    DocumentShared = "document/shared",
    SystemError = "system/error",
    UserAlert = "system/alert"
}

// Continued definitions of individual event constants

export const SessionEnd: Event = {
    name: EventName.SessionEnd,
    description: "When a session ends due to logout or system shutdown.",
    topic: EventTopic.SessionEnd,
    source: "agent"
};

export const ComputerAwake: Event = {
    name: EventName.ComputerAwake,
    description: "When the computer wakes from sleep mode.",
    topic: EventTopic.ComputerAwake,
    source: "agent"
};

export const ComputerSleep: Event = {
    name: EventName.ComputerSleep,
    description: "When the computer enters sleep mode.",
    topic: EventTopic.ComputerSleep,
    source: "agent"
};

export const SystemShutdown: Event = {
    name: EventName.SystemShutdown,
    description: "Triggered when the system is shutting down.",
    topic: EventTopic.SystemShutdown,
    source: "agent"
};

export const SystemStartup: Event = {
    name: EventName.SystemStartup,
    description: "Triggered when the system boots up.",
    topic: EventTopic.SystemStartup,
    source: "agent"
};

export const AppFocusGained: Event = {
    name: EventName.AppFocusGained,
    description: "When any application window gains focus.",
    topic: EventTopic.AppFocusGained,
    source: "agent"
};

export const AppFocusLost: Event = {
    name: EventName.AppFocusLost,
    description: "When any application window loses focus.",
    topic: EventTopic.AppFocusLost,
    source: "agent"
};

export const ActivityStart: Event = {
    name: EventName.ActivityStart,
    description: "Marks the beginning of a specific activity.",
    topic: EventTopic.ActivityStart,
    source: "agent"
};

export const ActivityPause: Event = {
    name: EventName.ActivityPause,
    description: "When an activity is paused.",
    topic: EventTopic.ActivityPause,
    source: "agent"
};

export const ActivityResume: Event = {
    name: EventName.ActivityResume,
    description: "When a paused activity is resumed.",
    topic: EventTopic.ActivityResume,
    source: "agent"
};

export const ActivityEnd: Event = {
    name: EventName.ActivityEnd,
    description: "Marks the end of an activity.",
    topic: EventTopic.ActivityEnd,
    source: "agent"
};

export const FileOpened: Event = {
    name: EventName.FileOpened,
    description: "When a file is opened.",
    topic: EventTopic.FileOpened,
    source: "agent"
};

export const FileClosed: Event = {
    name: EventName.FileClosed,
    description: "When a file is closed.",
    topic: EventTopic.FileClosed,
    source: "agent"
};

export const FileEdited: Event = {
    name: EventName.FileEdited,
    description: "When a file is edited.",
    topic: EventTopic.FileEdited,
    source: "agent"
};

export const FileSaved: Event = {
    name: EventName.FileSaved,
    description: "When changes to a file are saved.",
    topic: EventTopic.FileSaved,
    source: "agent"
};

export const EmailSent: Event = {
    name: EventName.EmailSent,
    description: "When an email is sent.",
    topic: EventTopic.EmailSent,
    source: "agent"
};

export const EmailReceived: Event = {
    name: EventName.EmailReceived,
    description: "When an email is received.",
    topic: EventTopic.EmailReceived,
    source: "agent"
};

export const MessageSent: Event = {
    name: EventName.MessageSent,
    description: "When a message is sent via any messaging platform.",
    topic: EventTopic.MessageSent,
    source: "agent"
};

export const MessageReceived: Event = {
    name: EventName.MessageReceived,
    description: "When a message is received.",
    topic: EventTopic.MessageReceived,
    source: "agent"
};

export const TaskCreated: Event = {
    name: EventName.TaskCreated,
    description: "When a new task is created.",
    topic: EventTopic.TaskCreated,
    source: "agent"
};

export const TaskModified: Event = {
    name: EventName.TaskModified,
    description: "When a task is modified.",
    topic: EventTopic.TaskModified,
    source: "agent"
};

export const TaskCompleted: Event = {
    name: EventName.TaskCompleted,
    description: "When a task is completed.",
    topic: EventTopic.TaskCompleted,
    source: "agent"
};

export const ProjectSwitch: Event = {
    name: EventName.ProjectSwitch,
    description: "When switching from working on one project to another.",
    topic: EventTopic.ProjectSwitch,
    source: "agent"
};

export const MeetingStart: Event = {
    name: EventName.MeetingStart,
    description: "When a meeting starts.",
    topic: EventTopic.MeetingStart,
    source: "agent"
};

export const MeetingEnd: Event = {
    name: EventName.MeetingEnd,
    description: "When a meeting ends.",
    topic: EventTopic.MeetingEnd,
    source: "agent"
};

export const DocumentShared: Event = {
    name: EventName.DocumentShared,
    description: "When a document is shared with the team.",
    topic: EventTopic.DocumentShared,
    source: "agent"
};

export const SystemError: Event = {
    name: EventName.SystemError,
    description: "When an error occurs within the system.",
    topic: EventTopic.SystemError,
    source: "agent"
};
