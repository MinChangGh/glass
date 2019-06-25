import Mock from 'mockjs'; // 导入mockjs 模块
let ModuleThree = [];
for (let i = 1; i <= 10; i++) {
    ModuleThree.push(Mock.mock({ // 根据数据模板生成模拟数据。
        id: Mock.Random.id(),
        title: Mock.Random.ctitle(),
        'sell_price|1-10000.1-2': 1,
        tags: Mock.Random.boolean(),
        'tags|1': ['时尚', '爆款', '热销', '新品'],
        img_url: 'http://img.unionglasses.com/FvYAPXx981fjh68dm5XOm7tcu1Y-'
    }));
}
export {
    ModuleThree
};