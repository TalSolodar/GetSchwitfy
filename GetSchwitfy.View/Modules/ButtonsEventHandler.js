class ButtonEventHandler{

    AddButtonsEventListener(buttons, gameController){

        for (let i = 0; i < buttons.length ; i++) {
            buttons[i].addEventListener("click", () => {
                gameController.HandleButtonEvent(i,buttons);
            });
        }        
    }
}