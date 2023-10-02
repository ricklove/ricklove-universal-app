import { Stack } from 'expo-router/stack';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import { styleVersion } from './style-version.gen';

export default function Layout() {
    // hot reload css during development
    useEffect(() => {
        console.log(`running`, { platform: Platform.OS });

        if (Platform.OS !== `web`) {
            return;
        }

        console.log(`styleVersion`, { styleVersion });

        const el = document.getElementById(`styles-gen`);
        if (el) {
            document.head.removeChild(el);
        }

        // <link rel="stylesheet" href="styles-web.gen.css" id="styles-gen">
        const newLink = document.createElement(`link`);
        newLink.id = `styles-gen`;
        newLink.rel = `stylesheet`;
        newLink.href = `styles-web.gen.css`;
        document.head.appendChild(newLink);
    }, [styleVersion]);

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: `#f4511e`,
                },
                headerTintColor: `#fff`,
                headerTitleStyle: {
                    fontWeight: `bold`,
                },
            }}
        />
    );
}
