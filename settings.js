require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAAdPJFsyS05VUgQAAG4HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGrmjVHXVIK2ICE0LiLo1D2kIEEXAJEjjlP99C7t7eh52Z3t5Ciepc758l*wEZYUpslEHtJ+gJvgCGeqXrKsR0MC0SVNEwBAkkEGggco6m+0sTa+6H6BQ9J42mzIQaxnOQw87FJ3T+impN1UmVg*gNgR181Lg+A8NBwN+z66P4y3R16zY1IY6Rq57ciN3KhmmaWXR6+sofXU3gvQAbn1HiAkus1mdoxMisLBR50FMvgbfsdIL3YezXf7yYtlGdMo3LXQq6dzF2XJzPdR4tpKUx1UTZV+DnxDBKPm4K*aF7keXwFFDdX6MvDUUM*PVKXXsS66AopQP3+BTnJUosRJUMsy6L*NuOUGbBuExDtVVqeyrxIrWXETCtrCjsRxeTLHSc8OFduR8DTi3ldp8z3iX3yZmNkCBsp63iI+sY1bPdZSKU6+7zrryalS*A*fIh1eO*4f3zt7bpBUXUHlNvHzLNfvMl1bOFiFZbJ8kZZlmTydeLJK7yl+AX+05x28mI8sMZXo2o5GEr9tGfnlKpq097crHKFpceLvzuuwTPmQN+RNKPVyWlkHGA2VwmpWrxdXkOHXEWUd1d8rpAi8m8yuE07k5mxwDkZXeUj9iZ+M+qty8o6o83nZRGlmhv8FXzmix1LlW*vxwv9ERdVYCNP42BARlmDICGa7KviZw6hDA5OKjmCB2pxcsPf8iHtIZbyGkuq0w6nK*rrC+CFVrWW+66pIcn01HFA7tAxiCmlQxohQlC0xZRToHUQozRIH2148hKNErexOuHyfyQ5BiQllYNnVRweRD1Y9NGMdVUzK*K2OjXyACNO6zjBjDZUZ7HpsSkjjHF2TkkFGgpbCg6NcNEUEJ0Bhp0K*UGlXSE79d7yN7G9lgCE53QXACNCDIkjqRFGmsKKI2*k6*tX1XWNffSsTAEBT3U9JY5DlxovCKIPC8Nv7el2+*4PXdEsQgLijQgOGdnnhkGbPVYSbHoWnqTqYbmQ4+r*Phizfem2rXELiNzMZBUyGa7iiqyb4aP1r2zJqNyhf30Y9PZPVqHB*+oQnQQJRvhWnsTV8uikkrttsLazqL0Pi8kqQAE34lb6DzNJKrreRy5UgNrKM9LgtRGVzFTIjDhWxPOqkV5MN239bRYVkG0OhNNAQJuuAY*T5Mp7kpJ8rVb5fByUOioqTUNSgTlERouubkmGfez+J2EAwOeeyKbjLes50RZMcoyBt1fmATv50vrXMuPQvFYTvfreGhfXPsPTHF+0uF717qhep*U4zuwS9hL99*CveGu7cXdxv+1uL9JfmXNE5fzubqLBR8Tg6LLCmyaLU4QwF6emfkxtSTheszVy7P3fi5BrfbjyGoC8jSipyABmCZkAonYAhI1fR+tcq0+sMwQ+es6XtUC0iZ*pmBAJ8QZfBUA41XZWWiTlRVfDvlkapeQJoDDfC2lC+k3tCdXtc+g+wjUkDvv6kag9vfUEsBAhQDFAAACAgAB08kWzJLTlVSBAAAbgcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254794648663',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'snills-tech-cell',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
