({
	init: function(component, event, helper) {
		let namespace = component.getType().split(':')[0];
        console.log('namespace: ', namespace);
        let developerName = component.get('v.developerName');
        console.log('developerName: ' + developerName);
        /*
        if (namespace && namespace !== 'c') {
            developerName = namespace + '__' + developerName;
            console.warn('developerName: ' + developerName);
            component.set('v.developerName', developerName);
        }
        */
	}
})