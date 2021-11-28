 const writhweatherdata = (weatherdata) => {
     let curretweather = $('[data-role="curretweather"]')
     $.each(weatherdata.main, (key, value) => {
         curretweather.append(`<div><span>${key.replace("","")}</span>`)
         curretweather.append(`<span>${value}</span></div>`)
     })
 }
 const input = $('#text')
 const btn = $('#but')

 function getweather(dor) {

     $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${input.val()}&appid=48dcd97aad6ad8423e79e9ce43262df4`, manse => {
         dor(manse)
         debugger
     })
 };

 btn.click(function () {
     $('[data-role="curretweather"] div').remove()
     $('[data-role="curretweather"] span').remove()

     getweather(writhweatherdata)

 });