const router = require('koa-router')()
const User = require('../models/User')
const md5 =require('md5')

router.prefix('/user')


router.post('/register', async ctx => {
  let {username, password} = ctx.request.body
  password = md5(password)
  let user = await User.find({
    username
  })
  if (user.length > 0) {
    ctx.body = {
      code: 1,
      message: '用户已存在'
    }
  } else {
    ctx.request.body.password = md5(ctx.request.body.password)
    let newUser = new User(ctx.request.body)
    await newUser.save().then(() => {
      ctx.body = {
        code: 200,
        message: '注册成功'
      }
    }).catch(error => {
      ctx.body = {
        code: 500,
        message: error
      }
    })
  }
})

router.post('/login', async ctx => {
  let {username, password, code} = ctx.request.body
  password = md5(password)
  let user = await User.find({
    username,
    password
  })
  if (code.toLowerCase() === (ctx.session.captcha).toLowerCase()) {
    if (user.length > 0) {
      ctx.session.user = user[0]
      ctx.body = {
        code: 200,
        data: user,
        message: '登录成功'
      }
    } else {
      ctx.body = {
        code: 500,
        data: null,
        message: '用户不存在'
      }
    }
  } else {
    ctx.body = {
      code: 1,
      data: null,
      message: '验证码不正确'
    }
  }

})

router.get('/allUsers', async ctx => {
  let users = await User.find()
  ctx.body = {
    code: 200,
    data: users
  }
})

router.get('/logout', async ctx => {
  ctx.session.user = null
  ctx.body = {
    code: 0,
    data: null,
    message: '登出成功'
  }
})


module.exports = router
