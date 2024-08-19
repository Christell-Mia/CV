document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
});

document.getElementById('download-pdf').addEventListener('click', async function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Añadir contenido del CV al PDF
    const content = document.querySelector('.container').innerHTML;

    doc.text('Currículum Vitae', 10, 10);
    doc.setFontSize(12);

    // Añadir el contenido del CV al PDF
    doc.html(content, {
        callback: function (doc) {
            doc.save('cv.pdf');
        },
        x: 10,
        y: 20,
        html2canvas: {
            scale: 2
        }
    });
});
