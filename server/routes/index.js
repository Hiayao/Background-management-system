const router = require('koa-router')()
const svgCaptcha = require('svg-captcha')
const dataJson = require('../data/newGoods')
const multer = require('koa-multer')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/captcha', async ctx => {
  let captcha = svgCaptcha.create()
  ctx.session.captcha = captcha.text
  ctx.response.type = 'image/svg+xml'
  ctx.body = captcha.data
})

router.get('/homeData', async ctx => {
  let data = {
    visits: 102400,
    messages: 81212,
    purchases: 9280,
    shopping: 13600
  }
  ctx.body = {
    code: 0,
    data
  }
})

router.get('/homeChat', async ctx => {
  let data = [
    {
      date: 'Mon',
      expected: 141,
      actual: 81
    },
    {
      date: 'Tue',
      expected: 222,
      actual: 181
    },
    {
      date: 'Wed',
      expected: 41,
      actual: 33
    },
    {
      date: 'Thu',
      expected: 91,
      actual: 77
    },
    {
      date: 'Fri',
      expected: 221,
      actual: 102
    },
    {
      date: 'Sat',
      expected: 83,
      actual: 112
    },
    {
      date: 'Sun',
      expected: 188,
      actual: 141
    }
  ]
  ctx.body = {
    code: 0,
    data
  }
})

router.get('/ringChat', async ctx => {
  let data = [
    {
      name: 'Industries',
      data: 141
    },
    {
      name: 'Technology',
      data: 137
    },
    {
      name: 'Forex',
      data: 87
    },
    {
      name: 'Gold',
      data: 131
    },
    {
      name: 'Forecasts',
      data: 99
    }
  ]
  ctx.body = {
    code: 0,
    data
  }
})

router.get('/radarChat', async ctx => {
  let data = [
    {
      name: 'Allocated Budget',
      sales: 141,
      ministration: 81,
      techology: 32,
      delelopmer: 67,
      marketing: 98
    },
    {
      name: 'Expected Spending',
      sales: 112,
      ministration: 65,
      techology: 57,
      delelopmer: 32,
      marketing: 109
    },
    {
      name: 'Actual Spending',
      sales: 131,
      ministration: 54,
      techology: 43,
      delelopmer: 77,
      marketing: 53
    }
  ]
  ctx.body = {
    code: 0,
    data
  }
})

router.get('/orderData', async ctx => {
  let data = [
    {
      num: 'ccDe5AB2-AC8E-Ce3B-9127-D8bf4e',
      price: '11,982.9',
      status: 0
    },
    {
      num: '4042b6Bb-Ef7E-5Ca2-9A5c-1F2b9e',
      price: '12,035.3',
      status: 0
    },
    {
      num: 'db2FD0BB-03Eb-cB68-E47a-FB8f5A',
      price: '3,469.5',
      status: 0
    },
    {
      num: 'e9E550AF-9712-f1CB-3Ed9-bd6b64',
      price: '3,380.5',
      status: 1
    },
    {
      num: 'F5bD99d5-eA64-Cfad-A8fb-cFD3e4',
      price: '7,334.98',
      status: 1
    },
    {
      num: '1BdE5d4A-fd26-3eB4-bD68-0d5ef1',
      price: '10,852.44',
      status: 0
    },
    {
      num: 'DDA4dd0B-dB69-8eC9-f849-F91a8e',
      price: '5,335.32',
      status: 1
    },
    {
      num: 'aeeC3425-0D70-b2eF-76B5-5298D2',
      price: '4,874.3',
      status: 1
    }
  ]
  ctx.body = {
    code: 0,
    data
  }
})

router.get('/todoList', async ctx => {
  let data = [

    {
      name: 'star this repository',
      checked: false
    },
    {
      name: 'fork this repository',
      checked: false
    },
    {
      name: 'follow author',
      checked: false
    },
    {
      name: 'vue-admin',
      checked: false
    },
    {
      name: 'vue',
      checked: false
    },
    {
      name: 'element-ui',
      checked: false
    },
    {
      name: 'axios',
      checked: true
    },
    {
      name: 'webpack',
      checked: true
    }
  ]
  ctx.body = {
    code: 0,
    data
  }
})

router.get('/progress', async ctx => {
  let data = [
    {
      name: 'Vue',
      progress: 0.7
    },
    {
      name: 'Html',
      progress: 1
    },
    {
      name: 'Css',
      progress: 0.54
    },
    {
      name: 'JavaScript',
      progress: 0.7
    },
  ]
  ctx.body = {
    code: 0,
    data
  }
})

router.get('/tableData', async ctx => {
  ctx.body = {
    code: 0,
    data: dataJson
  }
})


//加载koa-multer模块
//文件上传
//配置
let storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
let upload = multer({storage: storage});
//路由
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename,
    path: ctx.req.file.path//返回文件名
  }
})

module.exports = router
