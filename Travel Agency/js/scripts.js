document.addEventListener('DOMContentLoaded', function () {
    // Всплывающее окно
    const popup = document.getElementById('popup');

    window.showPopup = function () {
        popup.style.display = 'flex';
    };

    window.closePopup = function () {
        popup.style.display = 'none';
    };

    // Функция для удаления элементов из DOM
    window.removeElement = function (element) {
        element.parentNode.removeChild(element);
    };

    // Функция для создания вложенного списка UL/LI из объекта
    function createTree(container, data) {
        container.appendChild(createTreeDom(data));
    }

    function createTreeDom(data) {
        if (!Object.keys(data).length) return;

        let ul = document.createElement('ul');
        for (let key in data) {
            let li = document.createElement('li');
            li.textContent = key;

            let childrenUl = createTreeDom(data[key]);
            if (childrenUl) {
                li.appendChild(childrenUl);
            }

            ul.appendChild(li);
        }
        return ul;
    }

    // Пример объекта для создания дерева
    const data = {
        "Туры": {
            "Азия": {
                "Таиланд": null,
                "Вьетнам": null
            },
            "Европа": {
                "Франция": null,
                "Италия": null
            }
        },
        "Бронирование": {
            "Отели": null,
            "Апартаменты": null
        }
    };

    // Создание дерева
    const treeContainer = document.getElementById('tree');
    createTree(treeContainer, data);
});
