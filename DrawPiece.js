//create a chess board
const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const SymbolFromFen = {
    'k': 'King',
    'q': 'Queen',
    'b': 'Bishop',
    'n': 'Knight',
    'r': 'Rook',
    'p': 'Pawn',
}


let Piece = document.createElement('img');
Piece.setAttribute('draggable', 'true');
Piece.setAttribute('id','image_piece');
Piece.setAttribute('ondragstart', 'return dragStart(event)');

let rank_piece=0;
let file_piece=0;

function DrawPiece(fen) {
    let fenBoard = String(fen).split(' ')[0]
    for (let reader in fenBoard) {
        let sympol = fenBoard[reader]
        if (sympol == '/') {
            file_piece = 0;
            rank_piece ++;
        }
        else if (['1','2','3','4','5','6','7','8'].includes(sympol)) {
            file_piece += Number(sympol);
        }
        else {
            let PieceColor = (sympol == sympol.toUpperCase())?"White":"Black";
            let PieceType = SymbolFromFen[sympol.toLowerCase()];

            //load image
            Piece.setAttribute('src', './Image/' + PieceColor + PieceType + '.png');

            //draw piece
            SquarePieces = document.getElementById(rank_piece*8+file_piece);
            SquarePieces.appendChild(Piece.cloneNode(true));

            file_piece++;
        }
    }
}