import '/public/src/styles.scss';
///localStorage.clear();

const checker = document.querySelector('#todo_switcher');

let length = localStorage.length;

let todos_index = 0;

const input = document.querySelector('#text-todo');

input.value = '';

const value = input.value;

let sum;

let list = document.querySelector('#apps-list');

function toggle(event) {
    let enterCount = 1;

    const value = input.value;

    /// enter = first - reset, next - update todos

    if (event.key === 'Enter') {
        enterCount++;
        checker.className = 'spanfx-off';
        ///input.addEventListener('keydown', toggle);
        localStorage.setItem(`todo:${length++}`, value);
        checker.className = 'spanfx-active';
        input.value = '';
        list.innerHTML = '';

        for (let i = 0; i < length; i++) {
            sum = localStorage.getItem(`todo:${i}`); // Odczytuje w porządku indeksów
            list.insertAdjacentHTML(
                'beforeend',
                `<div id="divAll-${i}" class="main__todos__divAll "><li class="main__todos__ul__li numb:${i}" id="todo:${i}"><img class="todo-check" id="todo-id-check" src="/images/icon-check.svg" /><img class="cross-img cross-numb${i}" id="cross-id" src="/images/icon-cross.svg" />${sum}</li></div>`
            );
        }

        const cross = document.querySelectorAll('#cross-id');

        cross.forEach((all) => {
            all.addEventListener('click', (event) => {
                if (event.target) {
                    let local = event.target.parentElement.id;

                    localStorage.removeItem(local);
                    event.target.closest('div').style.display = 'none';
                    /// console.log(local);
                }
            });
        });

        setTimeout(() => {
            checker.className = 'spanfx-off';
        }, 500);
        //// console.log(enterCount);
    } else if (enterCount === 2) {
        setTimeout(() => {
            input.removeEventListener('keydown', toggle);
        }, 2000);
        /// console.log(enterCount);
        input.addEventListener('keydown', toggle);
    }
}

/////
for (let i = 0; i < length; i++) {
    sum = localStorage.getItem(`todo:${i}`); // Odczytuje w porządku indeksów
    list.insertAdjacentHTML(
        'beforeend',
        `<div id="divAll-${i}" class="main__todos__divAll "><li class="main__todos__ul__li numb:${i}" id="todo:${i}"><img class="todo-check" id="todo-id-check" src="/images/icon-check.svg" /><img class="cross-img cross-numb${i}" id="cross-id" src="/images/icon-cross.svg" />${sum}</li></div>`
    );
}

const cross = document.querySelectorAll('#cross-id');

cross.forEach((all) => {
    all.addEventListener('click', (event) => {
        if (event.target) {
            let local = event.target.parentElement.id;

            localStorage.removeItem(local);
            event.target.closest('div').style.display = 'none';
            console.log(local);
        }
    });
});

input.addEventListener('keydown', toggle);
