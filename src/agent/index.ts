import { Schema } from "../schema";

export interface Plugin {
    name: string;
    description?: string;
    version?: string;
}

export interface Event {
    name: string;
    description?: string;
    topic: string;
    source?: string;
    public?: boolean;
}

export interface Agent {
    schema?: Schema[];
    events?: Event[];
    onActivate: Function;
    onUpgrade: Function;
    onDeactivate: Function;
}

