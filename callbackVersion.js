/*   1. Mowing the yard 2000
     2. Weedeating the edges of the house and fence line 1500
     3. Trimming the hedges 1000
     4. Collect fallen wood for summer night fires 2500
     5. Water the garden 500
     */

/* const didGetTired = Math.random() < 0.3; */


function mowYard(callback, name){
    setTimeout(() => {
     console.log(name + " mowed the yard.")
     callback(); },
       2000);
       
      
    }
    
function weedEat(callback, name){
     const sleepiness = Math.random(); 
      if (sleepiness >= .1)
      
    {setTimeout(() => {
      
     console.log(name + " finished using the weed eater.")
    callback(); },
       1500)
     } else { console.log(name + " fell asleep after mowing the yard.") };
    }
    

function trimHedges(callback, name){
        const sleepiness = Math.random(); 
      if (sleepiness >= .2)
    {setTimeout(() => {
         
     console.log(name + " finished trimming the hedges.") 
     callback(); },
       1000);
    } else { console.log(name + " fell asleep after weed eating the yard.")};
}


function collectWood(callback, name){
        const sleepiness = Math.random(); 
      if (sleepiness >= .3)
    {setTimeout(() => {
     console.log(name + " finished collecting wood.") 
     callback(); },
       2500);
    } else { console.log(name + " fell asleep after trimming the hedges.")};
       
}


function waterGarden(callback, name){
        const sleepiness = Math.random(); 
      if (sleepiness >= .4)
    {setTimeout(() => {
     console.log(name + " finished watering the garden.")
    callback(); },
       500);
    } else { console.log(name +" fell asleep after collecting wood.")};
       
}


function doSummerChores(callback, name){
        
    console.log(name + " finished all their chores!");
    callback();
    
    
}

mowYard(() => {
    weedEat(() => {
        trimHedges(() => {
            collectWood(() => {
                waterGarden(() => {
                    doSummerChores(() => {

                    }, "Kate")
                }, "Kate")
            }, "Kate")
        }, "Kate")
    }, "Kate")
}, "Kate")

