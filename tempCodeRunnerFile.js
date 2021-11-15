    const verify = crypto.createVerify("sha256");
    verify.update(mensaje);
    verify.end();

    let result = verify.verify(llavePublica, Buffer.from(firma, 'base64'));

    if (result === false) {
        fs.writeFileSync(__dirname + '/uploads/' + Contenido2 + "Falso(1).txt", "Su documento está alterado, consulte la firma digital, la llave pública o el contenido del documento");

        res.download(__dirname + '/uploads/' + Contenido2 + "Falso(1).txt");

    } else {
        fs.writeFileSync(__dirname + '/uploads/' + Contenido2 + "Verdadero(1).txt", "El documento no a sido modificado");

        res.download(__dirname + '/uploads/' + Contenido2 + "Verdadero(1).txt");

    }
    app.post("/index", (req, res) => {
        res.sendFile(path.join(__dirname, '/index.html'));
    });