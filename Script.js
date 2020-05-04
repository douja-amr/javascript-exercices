// ARRAY 1
const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]
  
  // Part 1 - Find all users older than 24
 
                 document.write('<h4> Find all users older than 24 </h4>');
  document.write("<ol>");
    const older24Texas = texasss.filter(i => i.age > 24);

    var tab = older24Texas.map( user => user.name) 
    document.write(tab);
    document.write("<ol>");

//     for ( var i= 0; i < tab.length ; i++)
 
// {
//   document.write(tab[i] + tab1[i]);
// }




  // Part 2 - Find the total age of all users

document.write('<h4> Find the total age of all users </h4>');
document.write("<ol>");
  const totalAgeTexas = texasss
.map(i => i.age)
.reduce((accumulator, currentValue) => accumulator + currentValue);
document.write(totalAgeTexas);
document.write("<ol>");


  // Part 3 - List all female coders
  document.write('<h4>  List all female coders </h4>');

  document.write("<ol>");
  for (const person of texasss) {
    if(person.gender==='f')
      document.write("<li>"+person.name + "</li>");
  }
  document.write("</ol>");
  
  
  // ARRAY 2
  const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:false,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]
  
  // Part 1 - List all users in US in ascending order

  document.write('<h4> List all users in US in ascending order </h4>');
  document.write("</ol>");
  const USperson =newieyork
 .filter(per => per.us)
 .map(per => per.name)
 .sort();
document.write(USperson);
document.write("</ol>");



  // Part 2 - Sort all users by age
  document.write('<h4>Sort all users by age</h4>');

  const USage =newieyork.sort((a,b) => (a.age - b.age) ? 1: -1 ).map(i => i.age);  
  console.log(USage)
 document.write(USage)


  // Part 3 -  List all female coders
  
  document.write('<h4>List all female coders</h4>');
  document.write("</ol>");

  const female = newieyork.filter( f => f.gender === "f" && !f.coder)
  .map (i => i.name);

  document.write(female)
  document.write("</ol>");



  // ARRAY 3
  const vegzas = [
    {
      name: 'Charly',
      age: 32,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Law',
      age: 21,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Rosey',
      age: 42,
      coder:false,
      gender: 'f',
    },
    {
      name: 'Steph',
      age: 18,
      coder:true,
      gender:'f'
    },
    {
      name: 'Jon',
      age: 16,
      coder:true,
      gender: 'm',
    },
   
  ]
  
  // Part 1 - Find the total age of male coders under 25 
  document.write('<h4>Find the total age of male coders under 25 </h4>');
  const totalAgevegzas = vegzas.filter( a => a.gender === "m" && a.coder && a.age < 25)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(totalAgevegzas)

                                     // another way 


  const under25 = vegzas.filter(item => item.age<25 && item.gender==='m' && item.coder).reduce((tota,obj)=> tota+obj.age,0);
  document.write(under25);



  // Part 2 - List all male coders over 30


  document.write('<h4> 3.Find the total age of male coders under 25 </h4>');  
  const plus30=vegzas.filter(item => item.age>30 && item.gender==='m' && item.coder);
  for (item of plus30){
    document.write(item.name+' '+item.age+' '+ item.gender);
  }


  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.

  document.write('<h4> 3. Find the total age of everyone in texasss, newieyork and vegzas combined. </h4>');
  const toutmonde=texasss.concat(newieyork,vegzas).reduce((tot,ob) => tot+ob.age,0);
  document.write(toutmonde);