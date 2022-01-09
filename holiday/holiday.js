let count= (number) =>{
    for(index = 0 ; index<number ; index++){
        console.log(index)
    }
}
count(15);


// let namechange = (names) =>{
//     for(i=0 ; i < names.length ; i++){
//         let a = 'My name is ' + names ;
//         return a
//     }
// }
// let sentence = namechange()
// console.log(sentence);


// let newage =(age) => {
//         let x = age + 10;
//         console.log(x)
//     }
// newage(10)


// let nwage = (age) => {
//     age= new int[7]
//     for (i=0 ; i <=age.length; i++){
//         let a= age + 10
//         return a
//     }
// }
// age[0]=1
// age[1]=20
// let results =nwage();
//     console.log(results);


// age = new int[5]


// int[5]  = new int[10,20,30,40,50]
// console.log(new[1]);


// function nwage(age) {
//     console.log(age);
// }
// nwage('Garry')

let valu = ( a,b,c,d) =>{
 sam =a+b+c+d;
 mean =((a+b+c+d)/4);
 if (a>(b,c,d)){mode=a;}
 if (b>(a,c,d)){mode=b;}
 if (c>(a,b,d)){mode=c;}
 else {mode=d}
}
valu (10,20,30,40);
console.log('The Sum of 10, 20, 30 and 40 is '+ sam);
console.log('The Mean of 10, 20, 30 and 40 is '+ mean);
console.log('The Mode of 10, 20, 30 and 40 is '+ mode);

let hcf1 = (val) => {
     hcf1factors =[]
    for(i=0; i<=val; i++){
        if(val % i == 0){
            hcf1factors.push(i)
        }
    }
}
hcf1(10);
console.log(hcf1factors)

let hcffactors =(values) => {
   values = [10,20,30,40]
    console.log('factors of these numbers  '+ values)
   // for(i=0; i<values.length; i++ ){
        for(i=0; i <= values ; i++){
            if(values % i == 0){
            console.log(i)
        }   
    }
  }
  hcffactors();


  //let gradescheck =(grades) =>{

     let grades = [80, 90, 90,43,89,75,48,26,57, 100]
     let subjects =['yoruba','igbo','Intro Tech', 'Further maths', 'social studies','french','computer studies','Technical Drawing', 'english','mathematics']
     let results=[] 

        for(x=0; x<grades.length;x++){
            
            if(grades[x] >= 70 ){
                results.push( 'A')
            }
            if( grades[x] < 70 & grades[x] >=60){
                results.push('B')
            }
            if( grades[x] < 60 & grades[x] >=50){
            results.push('C')
            }
            if( grades[x] < 50 & grades[x] >= 45){
            results.push('D')
            }
            if (grades[x] < 45 & grades[x] >= 40){
            results.push('E') 
            }
            if(grades[x] <40) {
            results.push('F')    
             }  
    }

    for(x=0; x<grades.length;x++){
         console.log('Grade for '+ subjects[x] +' is '+ results[x])
    }



         //}
 // gradescheck()


  let color = ['black','white','green','grey'] 
  let item = ['house','car']
  for(IDBCursorWithValue of color){
      console.log('the '+ item[0] +' is '+ color[0])
      console.log('the '+ item[1] +' is '+ color[1])
      console.log('the '+ item[2] +' is '+ color[2])
      console.log('the '+ item[3] +' is '+ color[3])
    console.log('..')
    }

  let colors = ['black','white','green','grey'] 
  let items = ['house','car','roof', 'store room']
  for(i=0; i<items.length ; i++){
      console.log('the '+ items[i] +' is '+ colors[i])
  }

//
let agetester  =(age)=>{
    if (age<18){
        return 'Ineligible'
    }
    else {
        return'eligible'
    }
}
let genderchecker =(gender) =>{
    switch (gender){
        case "male":
            return ('Access denied')
            break;
        case "female":
            return ('Access Granted')
            break;
        default :
            return ('Invalid access code')
        }
}

console.log ('Welcome to Girls Table Talk')
console.log('You are '+ agetester(24)+'; '+ genderchecker("femalbie"))

//
let afa =(letters)=>{
    let letterarr =letters.split('')
    for(i=0; i<letterarr.length;i++){
        if( i % 2 !== 0 ){
            letterarr[i]='Z'
        }
    }
    return letterarr
}

console.log(afa('chizoba'))