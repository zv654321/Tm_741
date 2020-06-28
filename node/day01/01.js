// 引用mongoose包
const mongoose = require('mongoose');
// 数据库链接
mongoose.connect('mongodb://localhost/playground')
	.then(() => console.log('数据库连接成功'))
    .catch(err => console.log('数据库连接失败', err));
    // 设置集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    data: { type: Date, default: Date.now },
    isPublished: Boolean
});
// 使用规则创建集合 返回集合类(集合构造函数)
const Course = mongoose.model('Course', courseSchema);
// 创建集合类的实例
const course = new Course({
    name: 'Node.js course',
    author: 'wangjian',
    tags: ['node', 'backend'],
    isPublished: true
});
// 保存实例
course.save();
Course.create({name: 'JavaScript基础', author: '黑马讲师', isPublish: true}, (err, doc) => { 
    //  错误对象
   console.log(err)
    //  当前插入的文档
   console.log(doc)
});
// create还支持promise 可以写成下面的形式
Course.create({name: 'JavaScript基础', author: '黑马讲师', isPublish: true})
     .then(doc => console.log(doc))
     .catch(err => console.log(err))
