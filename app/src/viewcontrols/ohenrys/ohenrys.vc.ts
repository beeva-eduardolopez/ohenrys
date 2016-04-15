import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class OhenrysViewControl extends BaseViewControl {
    templateString: string = require('./ohenrys.vc.html');

    context: any = {};
}

register.viewControl('ohenrys-vc', OhenrysViewControl);
