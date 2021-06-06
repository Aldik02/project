c = new Array();
            n = new Array();
            c[0] = 1;
            n[0] = "USD";
            c[1] = 0.91;
            n[1] = "EUR";
            c[2] = 72.34;
            n[2] = "RUB";
            c[3] =  415.70;
            n[3] = "KZT";
     
            function GiveResult()
            {
                var res, vfrom, vto, vcash;
                vcash = document.getElementById("cash").value;
                vfrom = document.getElementById("from").value;
                vcash = vcash.replace(',', '\.');
                vcash = vcash.replace(' ', '');
                vcash = vcash.replace(' ', '');
                vto = document.getElementById("to").value;
                res = c[vto] * vcash / c[vfrom], 2;
 
                res = res.toFixed(2);
                res = res.toString();
                res = res.replace('\.', ',');
                res = "<span class='result'> Result :" + res + "</span>&nbsp;" + n[vto];
            
                document.getElementById("result").innerHTML = res;
            }


    
$('img').hide(2000).show(2000)(function(){
});
    
  
