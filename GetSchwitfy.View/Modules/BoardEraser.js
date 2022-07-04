class BoardEraser{
    RemoveButtons(){
        let elements = document.getElementsByTagName('div');
        for(let element of elements){
            while ( element.firstChild ){
                element.removeChild( element.firstChild );
            }
        }
    }
}