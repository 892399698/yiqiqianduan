import _ from 'underscore';
export default {
    replaceTpl(value, data) {
        if (!value) {
            return '';
        }
        if (!data || !data.length || typeof value !== 'string') {
            return value;
        }
        data.forEach((_d, index) => {
            let rr = `{${index}}`;
            value = value.replace(rr, _d);
        })
        return value;

    }
}