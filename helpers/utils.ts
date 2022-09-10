import { compareTwoStrings } from 'string-similarity';

export const compareStrings = (string1: string, string2: string) => {
    return compareTwoStrings(string1, string2)
}

export const getValidezArray = (cargas: [Date, Date][]) => {
    let validez: any[]= [];
    let meses: { [mes: number]: string } = []
    const toLongDate = new Intl.DateTimeFormat("es-cl", { month: "long" })
    for (let index = 0; index < 3; index++) {
        const date = new Date()
        const previousMonth = new Date().setMonth(date.getMonth() - index);
        meses[date.getMonth() - index] = toLongDate.format(previousMonth)
    }
    Object.entries(meses).forEach(([key, value]) => {
        const mes = parseInt(key)
        const res = cargas.filter((range) => {
            const meses = range[1].getMonth() - range[0].getMonth() + (12 * (range[1].getFullYear() - range[0].getFullYear()))
            if(meses >= 1){
                for (let index = 0; index  <= meses; index++) {
                    if(range[0].getMonth() + index == mes){
                        return true;
                    }
                }
                return false
            }else{
                 return range[0].getMonth() >= mes && range[1].getMonth() <= mes
            }
        } );
        if(res){
            validez.push({[value]:res})
        }else{
            validez.push({[value]:null})
        }
    }
    )
    const periodo =  validez.reduce((acc,rango) => {
        for(let mes in rango){
            acc[mes] = acc[mes] ?? rango[mes]
            acc[mes] = (acc[mes]?.length > 1) ? acc[mes].sort((a:[Date,Date],b:[Date,Date]) => a[1].getDate() > b[1].getDate() ? -1 : 1)[0] : acc[mes][0] ?? []
        }
        return acc
    },[])
    
    return periodo
}