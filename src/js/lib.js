class lib {
    constructor(...args){
        //console.log('생성자 함수를 통해서 lib의 인스턴스를 생성합니다.');
        this._message = [...args];
    }
    set message(...args){
        //console.log('setter 함수로 message의 값을 배정합니다.');
        this._message = args;
    }
    get message(){
        //console.log('getter 함수로 message의 값을 불러옵니다.');
        return this._message;
    }
    get enterance(){
        //console.log('enterance 함수로 message의 값을 불러옵니다.');
        return this._message.join(' ').concat('!');
    }
}

export default lib;