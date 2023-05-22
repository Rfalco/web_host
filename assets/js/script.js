/*!
 * Jeferson Luckas - the matrix effect
 * 
 * Copyright (c) 2020 Jeferson Luckas
 * Released under the MIT license
 * https://github.com/JefersonLucas/the-matrix-effect/blob/master/LICENSE
 *
 * Date: 2020-21-06
 */

window.onload = function () {

    var canvas = document.getElementById("canvas");

    effectMatrix(canvas);

    function effectMatrix(neo) {

        var screen = window.screen;
        var width = (neo.width = screen.width);
        var height = (neo.height = screen.height);
        var letters = Array(256).join(1).split("");

        var designMatrix = function () {

            /// COR DO FUNDO DA TELA
            neo.getContext("2d").fillStyle = "rgba(0,0,0,.05)";

            /// POSIÇÃO INICIAL DO TOP E LEFT
            neo.getContext("2d").fillRect(0, 0, width, height);

            /// COR DOS CARACTERES *******************************
            let oAtS = new Date().getSeconds();
            if (oAtS >= 00 && oAtS <= 09) {
                neo.getContext("2d").fillStyle = "#FFF";    /// BRANCO
            } else if (oAtS >= 10 && oAtS <= 19) {
                neo.getContext("2d").fillStyle = "#FF0";    /// AMARELO
            } else if (oAtS >= 20 && oAtS <= 29) {
                neo.getContext("2d").fillStyle = "#F00";    /// VERMELHO
            } else if (oAtS >= 30 && oAtS <= 39) {
                neo.getContext("2d").fillStyle = "#0FF";    /// AZUL
            } else if (oAtS >= 40 && oAtS <= 49) {
                neo.getContext("2d").fillStyle = "#0F0";    /// VERDE
            } else if (oAtS >= 50 && oAtS <= 59) {
                neo.getContext("2d").fillStyle = "#F0F";    /// VIOLETA
            }

            letters.map(function (position_y, index) {

                var text = String.fromCharCode(48 + Math.random() * 33);

                var position_x = index * 10; /// QUANTIDADE DE COLUNAS

                neo.getContext("2d").fillText(text, position_x, position_y);

                letters[index] = position_y > 758 + Math.random() * 1E4 ? 0 : position_y + 10;
            });
        }
        setInterval(designMatrix, 60);
    }
}