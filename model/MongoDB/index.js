const mongoose = require('mongoose')
// 连接 Mongodb 数据库
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  userUnifiedTopology: true,
})

const db = mongoose.connection;
// 连接失败
db.on('error', err => {
  console.log('MongoDB 数据库连接失败', err);
})
// 连接成功
db.once('open',function() {
  console.log('MongoDB 数据库连接成功')
})

// 创建一个模型
const Person = mongoose.model('Person', { name: String })
// 根据模型创建一个对象
const kitty = new Person({ name: '李宝强' })
const pategood = new Person({ name: '曾南期' })

// 调用save方法保存到数据库之中
kitty.save().then(() => console.log('meow'))
pategood.save().then(() => console.log('meow'))
