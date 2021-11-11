const express = require("express");
const ejs = require("ejs");
const request = require('request')

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.set('view engine', 'ejs');

app.use(express.static("public"));

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd  + '-' + mm + '-' + yyyy;

var url = 'https://api.aladhan.com/v1/calendar?latitude=11.2588&longitude=75.7804&method=8&month='+mm+'&year='+yyyy;  
var url_1 = 'https://api.aladhan.com/v1/calendar?latitude=12.4996&longitude=74.9869&method=8&month='+mm+'&year='+yyyy;
var url_2 = 'https://api.aladhan.com/v1/calendar?latitude=9.9312&longitude=76.2673&method=8&month='+mm+'&year='+yyyy;
var url_3 = 'https://api.aladhan.com/v1/calendar?latitude=8.5241&longitude=76.9366&method=8&month='+mm+'&year='+yyyy;


app.get("/",function(req,res){
  
  // Request URL
 
  request(url, (error, response, body)=>{
      // Printing the error if occurred
      if(error) console.log(error)
      
      // Printing status code
    //   console.log(response.statusCode);
      // Printing body
      const prayerData = JSON.parse(body);


      // console.log(dd);
      // console.log(prayerData.data[8].date.gregorian.day);
      for(var i=0; i<prayerData.data.length; i++){
        if( dd === prayerData.data[i].date.gregorian.day){
          var fajr = prayerData.data[i].timings.Fajr;
          var sunrise = prayerData.data[i].timings.Sunrise;
          var dhuhr = prayerData.data[i].timings.Dhuhr;
          var asr = prayerData.data[i].timings.Asr;
          var sunset = prayerData.data[i].timings.Sunset;
          var maghrib = prayerData.data[i].timings.Maghrib;
          var isha = prayerData.data[i].timings.Isha;
          var midnight = prayerData.data[i].timings.Midnight;
        }
       
      }
     request(url_1, (error, response, body)=>{
        // Printing the error if occurred
        if(error) console.log(error)
        
        // Printing status code
        console.log(response.statusCode);
        // Printing body
        const prayerData = JSON.parse(body);
    
  
        // console.log(dd);
        // conso le.log(prayerData.data[8].date.gregorian.day);
        for(var i=0; i<prayerData.data.length; i++){
          if( dd === prayerData.data[i].date.gregorian.day){
            var ks_fajr = prayerData.data[i].timings.Fajr;
            var ks_dhuhr = prayerData.data[i].timings.Dhuhr;
            var ks_asr = prayerData.data[i].timings.Asr;
            var ks_maghrib = prayerData.data[i].timings.Maghrib;
            var ks_isha = prayerData.data[i].timings.Isha;
          }
         
        }  

        request(url_2, (error, response, body)=>{
            // Printing the error if occurred
            if(error) console.log(error)
            
            // Printing status code
            console.log(response.statusCode);
            // Printing body
            const prayerData = JSON.parse(body);
        
      
            // console.log(dd);
            // conso le.log(prayerData.data[8].date.gregorian.day);
            for(var i=0; i<prayerData.data.length; i++){
              if( dd === prayerData.data[i].date.gregorian.day){
                var k_fajr = prayerData.data[i].timings.Fajr;
                var k_dhuhr = prayerData.data[i].timings.Dhuhr;
                var k_asr = prayerData.data[i].timings.Asr;
                var k_maghrib = prayerData.data[i].timings.Maghrib;
                var k_isha = prayerData.data[i].timings.Isha;
              }
             
            }
            
            request(url_3, (error, response, body)=>{
                // Printing the error if occurred
                if(error) console.log(error)
                
                // Printing status code
                console.log(response.statusCode);
                // Printing body
                const prayerData = JSON.parse(body);
            
          
                // console.log(dd);
                // conso le.log(prayerData.data[8].date.gregorian.day);
                for(var i=0; i<prayerData.data.length; i++){
                  if( dd === prayerData.data[i].date.gregorian.day){
                    var t_fajr = prayerData.data[i].timings.Fajr;
                    var t_dhuhr = prayerData.data[i].timings.Dhuhr;
                    var t_asr = prayerData.data[i].timings.Asr;
                    var t_maghrib = prayerData.data[i].timings.Maghrib;
                    var t_isha = prayerData.data[i].timings.Isha;
                  }
                 
                }  

            res.render("index",{
                a:fajr,
                b:sunrise,
                c:dhuhr,
                d:asr,
                e:sunset,
                f:maghrib,
                g:isha,
                h:midnight,
                ksa:ks_dhuhr,
                ksb:ks_asr,
                ksc:ks_maghrib,
                ksd:ks_isha,
                kse:ks_fajr,
                ka:k_dhuhr,
                kb:k_asr,
                kc:k_maghrib,
                kd:k_isha,
                ke:k_fajr,
                ta:t_dhuhr,
                tb:t_asr,
                tc:t_maghrib,
                td:t_isha,
                te:t_fajr
                });
            });

            });
       
         }); 
        
    });

}); 




 












