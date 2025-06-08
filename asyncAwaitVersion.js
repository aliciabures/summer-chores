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


async function doSummerChores(name){
try{
    const mowYardResult = await mowYard("Kate");
    console.log(mowYardResult);

    const weedEatResult = await weedEat("Kate");
    console.log(weedEatResult);

    const trimHedgesResult = await trimHedges("Kate");
    console.log(trimHedgesResult);

    const collectWoodResult = await collectWood("Kate");
    console.log(collectWoodResult);

    const waterGardenResult = await waterGarden("Kate");
    console.log(waterGardenResult);

    console.log(name + " finished all their chores!");
}
catch(error){
    console.error(error);
}
}

doSummerChores("Kate");