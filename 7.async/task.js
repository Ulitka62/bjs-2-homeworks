class  AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if(id == undefined){
            throw new Error('Параметр ID не передан')
        }
        
        if(this.alarmCollection.some((item) => item.id === id)){
            return console.error('Звонок с таким ID уже существует')
        }

        this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id){
        if(this.alarmCollection.some((item)=>item.id == id)){
            this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
            return true;
        }
        return false;
    }

    getCurrentFormattedTime(){
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`
    }

    start() {
        let alarmClock = checkClock.bind(this);
        function checkClock(alarm){
            if(alarm.time === this.getCurrentFormattedTime()){
                return alarm.callback();
            }
        }
        if(this.timerId === null) {
            this.timerId === setInterval(this.alarmCollection.forEach(item => alarmClock(item)));
        }
    }

    stop() {
        if(this.timerId === null) {
            clearInterval(this.timerId);
            this.timerId === null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item=> console.log(`id: ${item.id} time: ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
