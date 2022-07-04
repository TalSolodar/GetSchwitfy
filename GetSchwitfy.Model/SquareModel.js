class Square{

    constructor(number){
        this.number = number;
    }

    PrintSquareDetails(){
        if(this.number == 4){
            return "X";
        }
        return this.number;
    }
}