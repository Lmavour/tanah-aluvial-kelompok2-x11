/**
 * GeoDoc - Main Application Entry Point
 * Imports and initializes all modules
 */

import { initMap } from './map.js';
import { initChat } from './chat.js';
import { initNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initChat();
    initNavigation();
});
