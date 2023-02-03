/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfe89046bc27164b9',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f913a3a24fcb60c57a20eacef0e93d01',
  
 

  PROVINCE: '黑龙江',
  CITY: '哈尔滨',

  USERS: [
    {
      // 想要发送的人的名字
      name: '姜春旭',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oSgXn5k35HXu28-OJ-Q1qyiv3Mik',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'O6N3ngR10AtwgZUhO9Ltj7-hfEiiNQCjHS9wP4wXwAA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '2-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '姜春旭', year: '2002', date: '01-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '姜春旭', year: '2002', date: '02-15',
        },
      ],
      FESTIVALS_LIMITT:3,
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'O6N3ngR10AtwgZUhO9Ltj7-hfEiiNQCjHS9wP4wXwAA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'gh_d363be9a82ee ',
    }
  ],

}

module.exports = USER_CONFIG

