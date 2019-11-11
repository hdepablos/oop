import AxiosHandler from "./../../../class/AxiosHandler";

export default class {
    constructor() {
    }

    async save(data) {
        try {
            const conexion = new AxiosHandler({
                url: window.location.origin + "/api/prueba",
                data
            });
            return await conexion.execute();
        } catch (e) {
            throw e;
        }
    }
}