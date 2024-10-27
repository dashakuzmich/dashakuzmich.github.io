document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        fio: document.querySelector('input').value,
        email: document.querySelector('input').value,
        tel: document.querySelector('input').value
    }

    sendform(data);
});

async function sendForm(data) {
    const res = await fetch('./contacts.php', {
        method: 'POST',
        body: JSON.stringify(data)
    });

    const result = await res.json();
}