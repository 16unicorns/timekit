export interface CustomEvent {
    name: string;
    data: any;
}

export class EventManager {
    private static events = new Map<string, Function[]>();

    public static registerEvent(eventName: string): void {
        EventManager.events.set(eventName, []);
    }

    public static subscribe(eventName: string, callback: Function): void {
        if (!EventManager.events.has(eventName)) {
            console.warn(`Event ${eventName} is not registered.`);
            return;
        }
        EventManager.events.get(eventName)!.push(callback);
    }

    public static publish(eventName: string, data?: any): void {
        if (!EventManager.events.has(eventName)) {
            console.error(`No subscribers for the event: ${eventName}`);
            return;
        }
        for (const callback of EventManager.events.get(eventName)!) {
            callback(data);
        }
    }
}

// Example Plugin registering a new event
// EventManager.registerEvent('CustomPluginEvent');
