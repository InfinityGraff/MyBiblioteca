let GlobDegrade = null; // Variável global para armazenar a cor do degradê

function LoadDegade(CCnvs) {
    const gCnvs = document.querySelector('#gradientCanvas'),
        gCtx = gCnvs.getContext('2d');
    const CCtx = CCnvs.getContext('2d');
    const colorPicker1 = document.querySelector('#colorPicker1');
    const colorPicker2 = document.querySelector('#colorPicker2');
    const alignX = document.querySelector('#alignX');
    const alignY = document.querySelector('#alignY');

    let BllRd = 10,
        Bll1 = { x: CCnvs.width * 0.1, y: CCnvs.height * 0.1, color: '#ff0000' }, // Cor em formato hexadecimal
        Bll2 = { x: CCnvs.width * 0.8, y: CCnvs.height * 0.8, color: '#0000ff' }, // Cor em formato hexadecimal
        dgBll = null;

    const drawBall = (ball) => {
        CCtx.beginPath();
        CCtx.arc(ball.x, ball.y, BllRd, 0, Math.PI * 2);
        CCtx.fillStyle = ball.color;
        CCtx.fill();
        CCtx.strokeStyle = '#fff';
        CCtx.stroke();
        CCtx.closePath();
    };

    const drawControlPanel = () => {
        CCtx.clearRect(0, 0, CCnvs.width, CCnvs.height);
        const Mini = CCtx.createLinearGradient(Bll1.x, Bll1.y, Bll2.x, Bll2.y);
        Mini.addColorStop(0, Bll1.color);
        Mini.addColorStop(1, Bll2.color);
        CCtx.fillStyle = Mini;
        CCtx.fillRect(0, 0, CCnvs.width, CCnvs.height);
        drawBall(Bll1);
        drawBall(Bll2);
    
        // Armazena as posições e cores para recriar o gradiente
        GlobDegrade = {
            x1: Bll1.x,
            y1: Bll1.y,
            x2: Bll2.x,
            y2: Bll2.y,
            color1: Bll1.color,
            color2: Bll2.color
        };
    };
    

    const drawGradient = () => {
        /*
        const g = gCtx.createLinearGradient(
            (Bll1.x / CCnvs.width) * gCnvs.width,
            (Bll1.y / CCnvs.height) * gCnvs.height,
            (Bll2.x / CCnvs.width) * gCnvs.width,
            (Bll2.y / CCnvs.height) * gCnvs.height
        );
        g.addColorStop(0, Bll1.color);
        g.addColorStop(1, Bll2.color);
        gCtx.fillStyle = g;
        gCtx.fillRect(0, 0, gCnvs.width, gCnvs.height);
        */
    };

    const isBallClicked = (ball, x, y) => Math.sqrt((x - ball.x) ** 2 + (y - ball.y) ** 2) < BllRd;

    CCnvs.addEventListener('mousemove', (e) => {
        if (dgBll) {
            const { left, top } = CCnvs.getBoundingClientRect();
            dgBll.x = Math.max(BllRd, Math.min(CCnvs.width - BllRd, e.clientX - left));
            dgBll.y = Math.max(BllRd, Math.min(CCnvs.height - BllRd, e.clientY - top));
            drawControlPanel();
            drawGradient();
            Read_Canvs()
        }
    });

    CCnvs.addEventListener('mouseup', () => (dgBll = null));

    alignX.addEventListener('click', () => {
        Bll1.x = Bll2.x = CCnvs.width / 2;
        drawControlPanel();
        drawGradient();
        Read_Canvs()
    });
    alignY.addEventListener('click', () => {
        Bll1.y = Bll2.y = CCnvs.height / 2;
        drawControlPanel();
        drawGradient();
        Read_Canvs()
    });

    CCnvs.addEventListener('mousedown', (e) => {
        const rect = CCnvs.getBoundingClientRect();
        const X = e.clientX - rect.left,
            Y = e.clientY - rect.top;

        if (isBallClicked(Bll1, X, Y)) {
            dgBll = Bll1;
        } else if (isBallClicked(Bll2, X, Y)) {
            dgBll = Bll2;
        }
    });

    // Adiciona o evento de clique duplo
    CCnvs.addEventListener('dblclick', (e) => {
        const rect = CCnvs.getBoundingClientRect();
        const X = e.clientX - rect.left,
            Y = e.clientY - rect.top;

        if (isBallClicked(Bll1, X, Y)) {
            showColorPicker(colorPicker1, Bll1, e);
        } else if (isBallClicked(Bll2, X, Y)) {
            showColorPicker(colorPicker2, Bll2, e);
        }
    });

    drawControlPanel();
    drawGradient();
    Read_Canvs()

    function showColorPicker(colorPicker, ball, e) {
        colorPicker.value = ball.color; // Atualiza o seletor com a cor atual da bolinha

        // Posiciona o seletor de cores exatamente onde o mouse está
        colorPicker.style.position = 'absolute';
        colorPicker.style.left = `${e.clientX}px`;
        colorPicker.style.top = `${e.clientY}px`;
        colorPicker.style.display = 'block';

        // Mostra o painel de cores para o usuário
        colorPicker.click();

        // Atualiza a cor da bolinha enquanto o usuário escolhe uma nova cor
        colorPicker.addEventListener('input', function updateColor() {
            ball.color = colorPicker.value;
            drawControlPanel(); // Redesenha o painel após a mudança de cor
            drawGradient(); // Redesenha o degradê
            Read_Canvs()
        });

        // Após selecionar, esconde o seletor de cores novamente
        colorPicker.addEventListener('change', function hideColorPicker() {
            colorPicker.style.display = 'none';
        });
    }
    
}