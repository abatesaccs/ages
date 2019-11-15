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
        let temp = (this.age.toFixed(2) / this.mercury);
        return temp;
    }
    toVenus(){
        let temp = (this.age.toFixed(2) / this.venus);
        return temp;
    }
    toMars(){
        let temp = (this.age.toFixed(2) / this.mars);
        return temp;
    }  
    toJupiter(){
        let temp = (this.age.toFixed(2) / this.jupiter);
        return temp;
    }
    lifeExpectancy(planet){
        let averageAge = 71;
        let choice = planet.toLowerCase();
        if(choice == "mercury"){
            if (this.age > averageAge){
                return ((this.age - averageAge) / this.mercury);
            }
            return ((averageAge - this.age) / this.mercury);
        } else if (choice == "venus"){
            if (this.age > averageAge){
                return ((this.age - averageAge) / this.venus);
            }
            return ((averageAge - this.age) / this.venus);
        } else if (choice == "mars"){
            if (this.age > averageAge){
                return ((this.age - averageAge) / this.mars);
            }
            return ((averageAge - this.age) / this.mars);
        } else if (choice == "jupiter"){
            if (this.age > averageAge){
                return ((this.age - averageAge) / this.jupiter);
            }
            return ((averageAge - this.age) / this.jupiter);
        }
    }
}