const container = document.querySelector(".container")
const column  = document.querySelector(".column active")
const content = document.querySelector(".content")
const box = document.querySelector(".box")

document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.column');

    columns.forEach((column, index) => {
        column.addEventListener('mouseover', () => {
            columns.forEach(col => col.classList.remove('active'));
            column.classList.add('active');
        });
    });
});
