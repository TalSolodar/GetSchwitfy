class ButtonEventHandler{

    AddButtonsEventListener(buttons, gameController){

        for (let i = 0; i < buttons.length ; i++) {
            buttons[i].addEventListener("click", () => {
                 //onButtonPressed(i,buttons);
                gameController.HandleButtonEvent(i,buttons);
            });
        }        
    }
}