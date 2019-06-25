import request from '@/utils/request'
import MockAdapter from 'axios-mock-adapter';
import {
    ModuleThree
} from './data/home'; // 导入数据
export default {
    // 初始化函数
    start() {
        // 创建 MockAdapter 实例
        let mock = new MockAdapter(request);
        mock.onPost('Mall/Home/ModuleThree').reply(config => {
            return [200, ModuleThree];
        });
    }
};