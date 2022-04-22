var numeros = 100;
for (var i = 0; i <= numeros; i++)
{
  if (i % 3 !== 0 && i % 5 !==0 && i % 4 !==0)
  {
    document.write(i)
  }
 if (i % 3 == 0)
 {
   document.write("Fizz")
 }
 if (i % 5 == 0)
 {
   document.write("buzz")
 }
 if (i % 4 == 0)
 {
   document.write("True")
 }

 document.write("<br />")
}
