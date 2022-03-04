export let tracing = [];
export let result = null;

export const search = (id, data) => {
    //Organization
    for (const key in data) {
        if (key === 'id' && data[key] === id) {
            result = data;
            return data;
        } 
    }
    //Institutions
    data.institutions.forEach((i, indexI) => {
        for (const key in i) {
            if (key === 'id' && i[key] === id) {
                tracing.push('institutions');
                tracing.push(indexI);
                result = i;
                break;
            } 
        }
        //Departaments
        i.departments.forEach((d, indexD) => {
            for (const key in d) {
                if (key === 'id' && d[key] === id) {
                    tracing.push('institutions');
                    tracing.push(indexI);
                    tracing.push('departaments');
                    tracing.push(indexD);
                    result = d;
                    break;
                } 
            }
            //Others
            d.others.forEach((o, indexO) => {
                for (const key in o) {
                    if (key === 'id' && o[key] === id) {
                        tracing.push('institutions');
                        tracing.push(indexI);
                        tracing.push('departaments');
                        tracing.push(indexD);
                        tracing.push('others');
                        tracing.push(indexO);
                        result = o;
                        break;
                    } 
                }
                //Services
                o.services.forEach((s, indexS) => {
                    for (const key in s) {
                        if (key === 'id' && s[key] === id) {
                            tracing.push('institutions');
                            tracing.push(indexI);
                            tracing.push('departaments');
                            tracing.push(indexD);
                            tracing.push('others');
                            tracing.push(indexO);
                            tracing.push('services');
                            tracing.push(indexS);
                            result = s;
                            break;
                        } 
                    }
                    //Items
                    s.items.forEach((item, indexItem) => {
                        for (const key in item) {
                            if (key === 'id' && item[key] === id) {
                                tracing.push('institutions');
                                tracing.push(indexI);
                                tracing.push('departaments');
                                tracing.push(indexD);
                                tracing.push('others');
                                tracing.push(indexO);
                                tracing.push('services');
                                tracing.push(indexS);
                                tracing.push('items');
                                tracing.push(indexItem);
                                result = item;
                                break;
                            } 
                        }
                    });
                });
            });
        });
    });
}
