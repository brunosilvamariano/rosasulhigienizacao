
    // Função para ativar o slider de antes e depois interativo
    document.querySelectorAll('.before-after-slider').forEach(slider => {
        const wrapper = slider.querySelector('.before-after-wrapper');
        const beforeImg = slider.querySelector('.before-img');
        const afterImg = slider.querySelector('.after-img');
        
        let isMouseDown = false;
        let startX;
        
        slider.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.pageX - wrapper.offsetLeft;
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            let x = e.pageX - wrapper.offsetLeft;
            let moveX = (x - startX);
            if (moveX < 0) moveX = 0;
            if (moveX > slider.offsetWidth) moveX = slider.offsetWidth;
            wrapper.style.transform = `translateX(${moveX - slider.offsetWidth / 2}px)`;
        });

        slider.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
    });

