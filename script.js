const pdfFillForm = require('pdf-fill-form')
const fs = require('fs')
const path = require('path')

const nombrePdf = 'Prueba'
pdfFillForm.write(path.resolve(__dirname, '../templates-pdf/template.pdf'), { Nombre: 'Pepe', CampoCheckbox: true }, { save: 'pdf', cores: 4, scale: 0.1, antialias: true })
    .then(function (result) {
        fs.writeFile(path.resolve(__dirname, '../pdfs-generados/' + nombrePdf + '.pdf'), result, function (err) {
            if (err) {
                return console.log(err)
            }
            console.log('PDF generado correctamente')
        })
    }, function (err) {
        console.log(err)
    })
