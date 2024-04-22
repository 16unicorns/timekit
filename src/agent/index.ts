import { Schema } from "../schema";
import { Event } from "../events";

export interface Plugin {
    name: string;
    description?: string;
    version?: string;
}

export interface Agent {
    schema?: Schema[];
    events?: Event[];
    onActivate: Function;
    onUpgrade: Function;
    onDeactivate: Function;
}

