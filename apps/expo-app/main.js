// `@expo/metro-runtime` MUST be the first import to ensure Fast Refresh works
// on web.
import '@expo/metro-runtime';

// This file should only import and register the root. No components or exports
// should be added here.
import { App } from 'expo-router/_app';
import { renderRootComponent } from 'expo-router/src/renderRootComponent';

renderRootComponent(App);
