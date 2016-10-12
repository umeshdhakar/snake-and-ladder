$(function () {
    var p1 = 0,
        p2 = 0,
        p3 = 0,
        p4 = 0,
        val = 0;
    var i = 0;
    var counter = 2;
    var n;
    $("#dice").mouseenter(function () {
        $(this).effect('bounce', {
            times: 4
        }, 600);
    });
    $("#dice").click(function () {
        $(this).effect('bounce', {
            times: 4
        }, 600);
    });
    $('#add').click(function () {
        if (counter == 4) {
            alert('maximum 4 players');
            return;
        }
        counter++;
        $("#boxGroup").append('<input type="text" id="box' + counter + '" placeholder="player ' + counter + '" maxlength="8" class="text"><br>');
    });
    $('#remove').click(function () {
        if (counter == 2) {
            alert('minimum 2 players');
            return;
        }
        $("#box" + counter).remove();
        counter--;
    });
    $('#start').click(function () {
        n = counter;
        $('#player1').text($("#box1").val());
        $('#player2').text($("#box2").val());
        $('#player3').text($("#box3").val());
        $('#player4').text($("#box4").val());
        $('#playButton').show('slow');
    });
    function fun(p, pieceType) {
        val = 1 + Math.floor(Math.random() * 6);
        setTimeout(function () {
            $('#showdice').text(val);
        }, 100);
        var selector = '#' + p + ' img[src="' + pieceType + '"]';
        if (p + val > 30) return p;
        if (p + val == 30) {
            $('#winnername').text($("#player" + i).text());
            $('#winner').modal('show');
            document.getElementById('cheers').play();
            //$('.winner').text($("#box"+i).val());
            $(selector).hide('slow', function () {
                selector.remove();
            });
            return p;
        }
        $(selector).hide('slow', function () {
            selector.remove();
        });
        p += val;
        var newVal = Number($('#' + p).attr('value'));
        if (newVal != 0) {
            if (newVal > 0) document.getElementById('plus').play();
            if (newVal < 0) document.getElementById('minus').play();
            p += newVal;
        }
        var line = "<img class='piece' src=" + pieceType + ">";
        document.getElementById('play').play();
        $('#' + p).append(line);
        return p;
    }
    $('#dice').click(function () {
        if (i == n) {
            i = 0;
        }
        ++i;
        var played = $("#box" + i).val();
        var pl = played + " played.";
        $('#nextName').text(pl);
        if (i == 1) {
            p1 = fun(p1, "piece_purple.png");
        } else if (i == 2) {
            p2 = fun(p2, "piece_yellow.png");
        } else if (i == 3) {
            p3 = fun(p3, "piece_red.png");
        } else if (i == 4) {
            p4 = fun(p4, "piece_green.png");
        }
        $('#nextPlayer').text($("#box" + i).val());
    });
});