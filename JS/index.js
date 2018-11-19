//ARRAY CLASS PT1;
var csdc = {
    address: "ikeja",
    value: 200,
    staff: 20,
    country: "canada"
}

console.log(csdc.address);
var apc = ["tinubu", "buhari", "rochas", "ambode"];
   apc [0] = "tinubu";
  console.log(apc[1]);
  
  
  function superJenny (name, school){
      return " my name is " + name + " i school at " + school;

  }
  // push() //add new member to end of array
  // unshift()
  apc.push("el-rufai");
  apc.unshift("saraki");
  console.log(apc);
  apc[0];
  console.log(apc[0]);


  //LOOPS
  //loops are used to repeat blocks until a certain condition is met.
  //example 
  //loop using for and in
  var text = "i have a machine gun";
  var person = {
      firstName: "Jennifer",
      lastName: "Nzeribe",
      age: 26
  };
  var x;
  for (x in person){
      text += person[x] + " machine gun ";
      }
     console.log(text);
     //loop using while and do
    //  var text = "having my precious time working on this loop"
    //  var i = 5;
    //  while (i < 10) {
    //      text += "<br> The number is " + i;
    //      i++;
    //  }
    //  console.log(text);

    //  function counters() {
    //      var jenny = "cunting 1 - 20"
    //      var i;
    //      for (i=0; i<20; i++){
    //         text += "The number is " + i + "<br>";  
    //      }
    //  }
    //  console.log(jenny);
     function jenny() {
        var jenny = "";
        var i;
        for (i = 0; i < 20; i++) {
            jenny += "The number is " + i + "<br>";
        }
        console.log(jenny);
    }
    function counter(){
        for(jenny = 1; jenny < 21; jenny++){
            console.log(jenny);
        }
    }

    console.log(counter());

    function apcLoop(){
        for(i = 0; i < apc.length-1 ; i++ ){
        console.log(apc[i]);
        }
    }
    console.log(apcLoop());
    console.log(apc.length);


    