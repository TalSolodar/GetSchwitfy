class Square{

    constructor(number, maximumSquareNumber){
        this.number = number;
        this.maximumSquareNumber = maximumSquareNumber;
    }

    PrintSquareDetails(){
        if(this.number == this.maximumSquareNumber){
            return "X";
        }
        return this.number;
    }
}