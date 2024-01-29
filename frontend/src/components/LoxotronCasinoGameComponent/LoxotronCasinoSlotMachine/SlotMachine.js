
let screen;
let screen_width = 1450;
let screen_height = 567;

let context;

let running = false;
let stable = true;

let tile_width = 250;
let tile_height = 250;
let space = 15;

let gambling_machine = []
for (let i = 0; i < 5; i++) {
    let column = []
    for (let j = 0; j < 10; j++) {
        column.push(
            {
                x: (i + 1) * space + i * tile_width,
                y: (j + 1) * space + j * tile_height
            }
        )
    }
    gambling_machine.push(column);
}

function drawTiles(context) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            context.fillStyle = "green";
            context.fillRect(
                gambling_machine[i][j].x,
                gambling_machine[i][j].y,
                tile_width,
                tile_height
            );

            context.fillStyle = "white";
            context.fillText(
                j.toString(),
                gambling_machine[i][j].x + tile_width / 2,
                gambling_machine[i][j].y + tile_height / 2,
            );
        }
    }
}

server_response = "34124";

function tilesMoving() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            if (running) {
                gambling_machine[i][j].y += i + 4;
            } else {
                position = 2 * space + tile_height;

                if (gambling_machine[i][parseInt(server_response[i])].y != position) {
                    gambling_machine[i][j].y += 1;
                }
            }

            if (gambling_machine[i][j].y > 9 * space + 8 * tile_height) {
                gambling_machine[i][j].y = -tile_height;
            }
        }
    }
}

window.onload = function() {
    screen = document.getElementById("screen");
    screen.height = screen_height;
    screen.width = screen_width;

    context = screen.getContext("2d");

    drawTiles(context);

    document.addEventListener("keydown", run_this_shit);
}

function run_this_shit(e) {
    if (e.code == "Space")
    {
        running = !running;

        if (running) {
            stable = false;
            requestAnimationFrame(update);
        }
    }
}

function update() {
    if (!stable) {
        requestAnimationFrame(update);
    }

    context.clearRect(0, 0, screen_width, screen_height);

    tilesMoving();
    drawTiles(context);
}
