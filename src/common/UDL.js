import zh from './lang/zh-cn';
import common from './common';
// import _ from 'underscore';
export default {
    g: function(key, data) {

        try {
            let keys = key.split('.'),
                langMaps = zh;
            keys.forEach((k) => {
                langMaps = langMaps[k];
            })
            return common.replaceTpl(langMaps, data);
        } catch (e) {

        }

    },
}