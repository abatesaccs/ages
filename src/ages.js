export class Age{
    constructor(age){
        this.age = age;
        this.mercury = .24;
        this.venus = .62;
        this.mars = 1.88;
        this.jupiter = 11.86;
        this.averageLife = 71;
    }
    toMercury(){
        let temp = (this.age.toFixed(2) * this.mercury);
        return temp;
    }
    toVenus(){
        let temp = (this.age.toFixed(2) * this.venus);
        return temp;
    }
    toMars(){
        let temp = (this.age.toFixed(2) * this.mars);
        return temp;
    }  
    toJupiter(){
        let temp = (this.age.toFixed(2) * this.jupiter);
        return temp;
    }
    lifeExpectancy(age, planet){
        let averageAge = 70;
        let choice = planet.toLowerCase();
        if(choice == "mercury"){
            
        } else if (choice == "venus"){

        } else if (choice == "mars"){

        } else if (choice == "jupiter"){

        }
    }
};