
{
    let list=usedAirtime.split(',');
    var airLeft=0;
    
    for(var x=0;x<list.length;x++)
    {
      var checkAirtime=list[x];
      
      if(checkAirtime.trim()=='sms')
      {
          airLeft+=0.75;
      }
      else if(checkAirtime.trim()=='call')
      {
        airLeft+=1.88;
      }
      else if(checkAirtime.trim()=='data')
      {
         airLeft+=12;
      }
    }
    if(avalaibleAirtime-airLeft>0)
    {
      return "R"+(avalaibleAirtime-airLeft).toFixed(2);
    }
    else
    {
     airLeft=0;
     return "R"+airLeft.toFixed(2);
    }
  }