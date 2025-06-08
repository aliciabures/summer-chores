function mowYard(name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve (name+" mowed the yard");
            }, 2000);
    });
}
      
    
    
function weedEat(name){
         return new Promise((resolve, reject) => {
        const sleepiness = Math.random(); 
         if (sleepiness >= .1)
            {setTimeout(() => {
            resolve(name + " finished using the weed eater.");
            }, 1500)
        } else { reject(name + " fell asleep after mowing the yard.") };
    })
}
    

function trimHedges(name){
         return new Promise ((resolve, reject) => {
        const sleepiness = Math.random(); 
         if (sleepiness >= .2)
          {setTimeout(() => {
             resolve(name + " finished trimming the hedges.") ;
            }, 1000);
       } else { reject(name + " fell asleep after weed eating the yard.")};
    })
}


function collectWood(name){
        return new Promise ((resolve, reject) => {
        const sleepiness = Math.random(); 
        if (sleepiness >= .3)
         {setTimeout(() => {
        resolve(name + " finished collecting wood.");
         }, 2500);
     }  else {reject(name + " fell asleep after trimming the hedges.")};
    })      
}

function waterGarden(name){
        return new Promise((resolve, reject) => {
        const sleepiness = Math.random(); 
        if (sleepiness >= .4)
            {setTimeout(() => {
            resolve(name + " finished watering the garden.");
             }, 500);
        } else { reject(name +" fell asleep after collecting wood.")};
    })     
}


function doSummerChores(name){
        console.log(name + " finished all their chores!");    
}

mowYard("Kate").then(value => {console.log(value); return weedEat("Kate")})
            .then(value => {console.log(value); return trimHedges("Kate")})
            .then(value =>{console.log(value); return collectWood("Kate")})
            .then(value =>{console.log(value); return waterGarden("Kate")})
            .then(value =>{console.log(value); return doSummerChores("Kate")})
            .catch(error => console.error(error));
