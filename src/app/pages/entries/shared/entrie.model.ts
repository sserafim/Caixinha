export class Entrie {

    $key: string;
    nomeDespesa: string;
    descricao: string;
    tipoDespesa: string;
    valor: number;
    data: string;
    pago: boolean;
    category: string;
    

    constructor() {
    }

    static types = {
        despesa: 'Despesa',
        receita: 'Receita'
    };

    get pagoPendente(): boolean {
        return this.pago;
    }

}