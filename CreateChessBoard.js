for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
        let SquareColor = ((rank % 2 == 0) && (file % 2 == 0)) || ((rank % 2 != 0) && (file % 2 != 0)) ? "white" : "black";
        let SquareNumber = rank * 8 + file;
        document.write("<div class='" + SquareColor + "' id='"+ SquareNumber +"'></div>");
        let Square = document.getElementById(SquareNumber);
        Square.setAttribute("ondragenter","return dragEnter(event)");
        Square.setAttribute("ondrop","return dragDrop(event)");
        Square.setAttribute("ondragover","return dragOver(event)");
    }
}
DrawPiece(START_FEN);