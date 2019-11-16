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
    keithRichards(){
        const age = 75;
        let result = ((75*7)/11.86);
        return result;
    }
    lifeExpectancy(planet){
        let averageAge = 71;
        let choice = planet.toLowerCase();
        let result = 0;
        if(choice == "mercury"){
            if (this.age > averageAge){
                result = ((this.age - averageAge) / this.mercury).toFixed(2);
                return result;
            }
            result = ((averageAge - this.age) / this.mercury).toFixed(2);
            return result;
        } else if (choice == "venus"){
            if (this.age > averageAge){
                result = ((this.age - averageAge) / this.venus).toFixed(2);
                return result;            }
                result = ((averageAge - this.age) / this.venus).toFixed(2);
                return result;
        } else if (choice == "mars"){
            if (this.age > averageAge){
                result = ((this.age - averageAge) / this.mars).toFixed(2);
                return result;
            }
            result = ((averageAge - this.age) / this.mars).toFixed(2);
            return result;
        } else if (choice == "jupiter"){
            if (this.age > averageAge){
                result = ((this.age - averageAge) / this.jupiter).toFixed(2);
                return result;
            }
            result = ((averageAge - this.age) / this.jupiter).toFixed(2);
            return result;
        }
    }
}