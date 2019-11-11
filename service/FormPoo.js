import Form from "../class/Form"

export default class FormPoo extends Form {

    constructor(data) {
        super(data);
    }

    async save(){
        try {
            const resp = await this.submit("post", `${window.location.origin}/api/prueba`);            
            this.onSuccess(resp);
        }
        catch (error) {
            if (error.response.status == 422){
                this.onFail(error.response.data);
            }else{
                console.log(error.response.statusText);
            }
            throw error;
        }
        finally{
            console.log('Finalizó el proceso');
        }
    }

    async saveData(data){
        try {
            let data = this.data();
            data.detalle_antes = 'esto es una prueba';
            const resp = await this.submit("post", `${window.location.origin}/api/prueba`, data);            
            this.onSuccess(resp);
        }
        catch (error) {
            if (error.response.status == 422){
                this.onFail(error.response.data);
            }else{
                console.log(error.response.statusText);
            }
        }
        finally{
            console.log('Finalizó el proceso');
        }
    }
}