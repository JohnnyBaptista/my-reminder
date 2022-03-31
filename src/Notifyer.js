const Notifyer = {
    async init(){
        const permission = await Notification.requestPermission();
        if(permission !== 'granted'){
            throw new Error('Permission not granted for Notification');
        }
    },
    notify({ title, description, icon }) {
        return () => new Notification(title, {
            body: description,
            icon
        });
    },

}

export { Notifyer };