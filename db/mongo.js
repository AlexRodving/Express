import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017/test'

class MongoDB {
    constructor() {
        this.client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Подключение к MongoDB установлено')
        }catch(error) {
            console.error('Ошибка подключения к MongoDB',error)
        }
    }

    async disconnect() {
        try{
            await this.client.close()
            console.log('Отключение от БД выполнено')
        }catch(error){
            console.error('Ошибка отключения от БД',error)
        }
    }
}

export default new MongoDB()