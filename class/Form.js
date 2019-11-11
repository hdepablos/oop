import Errors from "./Errors";
import AxiosHandler from "./../../../class/AxiosHandler";

export default class Form {
    constructor(data) {
        this.originalData = data;
        for (let filed in data) {
            this[filed] = data[filed];
        }
        this.errors = new Errors();
    }

    data() {
        // let data = Object.assign({}, this);
        // delete data.originalData;
        // delete data.errors;

        let data = {};

        for (let field in this.originalData) {
            data[field] = this[field];
        }
        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
        this.errors.clear();
    }

    onSuccess(data) {
        this.reset();
    }

    onFail(error) {
        this.errors.record(error);
    }

    async submit(requestType, url) {
        try {
            const conexion = new AxiosHandler({
                method: requestType,
                url: url,
                data: this.data()
            });
            return await conexion.execute();
            // this.onSuccess(resp);
        }
        catch (e) {
            throw e;
        }
    }

    async submit(requestType, url, data) {
        try {
            const conexion = new AxiosHandler({
                method: requestType,
                url: url,
                data: data
            });
            return await conexion.execute();
        }
        catch (e) {
            throw e;
        }
    }
}