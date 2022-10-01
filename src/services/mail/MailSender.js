const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "4ee9cf96fe520a",
        pass: "2a8e8c924e4569",
    },
});

const sendEmail = ({ targetEmail, content }) => {
    return transporter.sendMail({
        from: '"🎵 Openmusic" <openmusic@senggoldong.com>',
        to: targetEmail,
        subject: "Ekspor Playlist",
        html: `
            <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans;
                        }
                    </style>
                </head>
                <body>
                    <h1>🎵 Openmusic</h1>
                    <p>Terimakasih sudah memilih Openmusic sebagai platform streaming music Anda</p>
                    <p>Berikut terlampir hasil dari ekspor playlist</p>
                </body>
            </html>
        `,
        attachments: [
            {
                filename: "playlist.json",
                content: JSON.stringify(content),
            },
        ],
    });
};

module.exports = sendEmail;
