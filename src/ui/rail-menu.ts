// src/RailMenu.ts

/**
 * RailMenuItem represents an item in the navigation rail menu.
 * @property {string} path - The URL path that the item links to.
 * @property {string} icon - The icon displayed in the rail item. This should be an svg 24x24.
 * @property {string} label - The label text displayed for the item.
 * @property {string} [title] - Optional. The tooltip text displayed when hovering over the item.
 */
export type RailMenuItem = {
    path: string;
    icon: string;
    label: string;
    title?: string;
};

/**
 * IRailMenu provides an interface for managing rail menu items.
 */
export interface IRailMenu {
    addItem(item: RailMenuItem): void;
    removeItem(path: string): void;
    updateItem(path: string, newItem: RailMenuItem): void;
    getItems(): RailMenuItem[];
}

// Implement the interface with a class
class RailMenu implements IRailMenu {
    private items: RailMenuItem[] = [];

    addItem(item: RailMenuItem): void {
        this.items.push(item);
    }

    removeItem(path: string): void {
        this.items = this.items.filter(item => item.path !== path);
    }

    updateItem(path: string, newItem: RailMenuItem): void {
        const index = this.items.findIndex(item => item.path === path);
        if (index !== -1) {
            this.items[index] = newItem;
        }
    }

    getItems(): RailMenuItem[] {
        return this.items;
    }
}

// Change from default to named export
export const railMenu = new RailMenu();
