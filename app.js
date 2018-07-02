/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SaaSCloudApp.Application',

    name: 'SaaSCloudApp',

    requires: [
        // This will automatically load all classes in the SaaSCloudApp namespace
        // so that application classes do not need to require each other.
        'SaaSCloudApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'SaaSCloudApp.view.main.Main'
});
