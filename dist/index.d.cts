interface Schema {
    tableName: string;
    fields: Field[];
}
declare enum FieldType {
    INTEGER = "INTEGER",
    TEXT = "TEXT",
    REAL = "REAL",
    BLOB = "BLOB",
    BOOLEAN = "BOOLEAN",
    DATE = "DATE",
    DATETIME = "DATETIME",
    TIMESTAMP = "TIMESTAMP"
}
interface Field {
    primaryKey?: boolean;
    name: string;
    type: FieldType;
    nullable?: boolean;
}

interface CustomEvent {
    name: string;
    data: any;
}
declare class EventManager {
    private static events;
    static registerEvent(eventName: string): void;
    static subscribe(eventName: string, callback: Function): void;
    static publish(eventName: string, data?: any): void;
}

interface Event {
    name: EventName;
    description: string;
    topic: EventTopic;
    source: string;
    public?: boolean;
}
declare enum EventName {
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
declare enum EventTopic {
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
declare const SessionEnd: Event;
declare const ComputerAwake: Event;
declare const ComputerSleep: Event;
declare const SystemShutdown: Event;
declare const SystemStartup: Event;
declare const AppFocusGained: Event;
declare const AppFocusLost: Event;
declare const ActivityStart: Event;
declare const ActivityPause: Event;
declare const ActivityResume: Event;
declare const ActivityEnd: Event;
declare const FileOpened: Event;
declare const FileClosed: Event;
declare const FileEdited: Event;
declare const FileSaved: Event;
declare const EmailSent: Event;
declare const EmailReceived: Event;
declare const MessageSent: Event;
declare const MessageReceived: Event;
declare const TaskCreated: Event;
declare const TaskModified: Event;
declare const TaskCompleted: Event;
declare const ProjectSwitch: Event;
declare const MeetingStart: Event;
declare const MeetingEnd: Event;
declare const DocumentShared: Event;
declare const SystemError: Event;

interface Plugin {
    name: string;
    description?: string;
    version?: string;
}
interface Agent {
    schema?: Schema[];
    events?: Event[];
    onActivate: Function;
    onUpgrade: Function;
    onDeactivate: Function;
}

/**
 * RailMenuItem represents an item in the navigation rail menu.
 * @property {string} path - The URL path that the item links to.
 * @property {string | Function} icon - The icon displayed in the rail item. This can be a URL string or a rendering function for a component.
 * @property {string} label - The label text displayed for the item.
 * @property {string} [title] - Optional. The tooltip text displayed when hovering over the item.
 */
type RailMenuItem = {
    path: string;
    icon: string | Function;
    label: string;
    title?: string;
};
/**
 * IRailMenu provides an interface for managing rail menu items.
 */
interface IRailMenu {
    addItem(item: RailMenuItem): void;
    removeItem(path: string): void;
    updateItem(path: string, newItem: RailMenuItem): void;
    getItems(): RailMenuItem[];
}
declare class RailMenu implements IRailMenu {
    private items;
    addItem(item: RailMenuItem): void;
    removeItem(path: string): void;
    updateItem(path: string, newItem: RailMenuItem): void;
    getItems(): RailMenuItem[];
}
declare const railMenu: RailMenu;

export { ActivityEnd, ActivityPause, ActivityResume, ActivityStart, type Agent, AppFocusGained, AppFocusLost, ComputerAwake, ComputerSleep, type CustomEvent, DocumentShared, EmailReceived, EmailSent, type Event, EventManager, EventName, EventTopic, type Field, FieldType, FileClosed, FileEdited, FileOpened, FileSaved, MeetingEnd, MeetingStart, MessageReceived, MessageSent, type Plugin, ProjectSwitch, type RailMenuItem, type Schema, SessionEnd, SystemError, SystemShutdown, SystemStartup, TaskCompleted, TaskCreated, TaskModified, railMenu };
