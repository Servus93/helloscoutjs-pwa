import { scout, App as ScoutApp } from '@eclipse-scout/core';
import { Desktop } from './desktop/Desktop'
import { HelloForm } from './greeting/HelloForm'

scout.addObjectFactories({
    'Desktop': () => new Desktop()
});

window.helloworld = Object.assign(window.helloworld || {}, {
    HelloForm
});

new ScoutApp().init({
    bootstrap: {
        textsUrl: 'texts.json'
    }
});