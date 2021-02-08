const dnd = () => {
    const card = document.querySelector('.card'); //здесь добавлять кнопки
    const card1 = document.querySelector('.card1');
    const cells = document.querySelectorAll('.item');
    const dragStart = function(){
        btn = this;
        setTimeout(() =>{
            this.classList.add('hide');
            
            
        }, 0)
    };
    const dragEnd = function(){
        setTimeout(() =>{
            this.classList.remove('hide');
        }, 0)
    };

    const dragOver = function (event) {
        event.preventDefault();
        
    };

    const dragEnter = function () {
        this.classList.add('hovered');
        
        
    };

    const drageLeave = function () {
        this.classList.remove('hovered');
        
    };
    
    let drop =  function () {
        console.log(btn);
        this.append(btn);
        this.classList.remove('hovered');
        lot = this.getAttribute('data-lot');
        if (lot == 1 && btn.getAttribute('data-btn') == 1){    //здесь добавлять условия
            location.href = 'https://gerzevich.info/index.php?klass=10_inform_prof';
        } else if (lot == 2 && btn.getAttribute('data-btn') == 1) {
            location.href = 'https://gerzevich.info/physics/10_kl_prof/10_f_239_243.pdf'
        } else if (lot == 3 && (btn.getAttribute('data-btn') == 1)){
            location.href = 'https://kompege.ru/'
        } else if (lot == 4 && (btn.getAttribute('data-btn') == 1)){
            location.href = 'https://gerzevich.info/'
        } else {
            alert('Действие не записано, но его можно')
        };
        };

    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', drageLeave);
        cell.addEventListener('drop', drop);
    });

    
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
    card1.addEventListener('dragstart', dragStart);
    card1.addEventListener('dragend', dragEnd);

};

dnd();
