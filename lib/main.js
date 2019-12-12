function passWord() {
   var testV = 1;
   var pass1 = prompt('Password',' ');
   while (testV < 3) {
   if (!pass1)
   history.go(-1);
   if (pass1.toLowerCase() == "48minutes") {
       window.open("/48/48192231/Rina2131.html",'_self')
       return " ";
   }
   
   testV+=1;
   var pass1 =
   prompt('','Password');
   }
   if (pass1.toLowerCase()!="password" & testV ==3)
   history.go(-1);
   return " ";
   }