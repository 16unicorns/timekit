import { IRailMenu } from './ui';

export * from './agent';
export * from './events';
export * from './schema';
export * from './ui';


// Define the interface in TypeScript for type safety
export interface Plugin {
    init: (context: PluginContext) => void;  // Initialize the plugin with a context object
    destroy?: () => void;                   // Cleanup resources when the plugin is unloaded
}

export interface PluginContext {
    rail: IRailMenu;
}
