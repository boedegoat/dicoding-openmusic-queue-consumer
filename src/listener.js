const playlistsService = require("./services/db/PlaylistsService");
const sendEmail = require("./services/mail/MailSender");

const listener = async (message) => {
    try {
        const content = JSON.parse(message.content.toString());
        console.log({ content });

        const { targetEmail, playlistId } = content;

        const playlist = await playlistsService.getPlaylistWithSongs({
            playlistId,
        });
        const result = await sendEmail({ targetEmail, content: playlist });

        console.log({ result });
    } catch (error) {
        console.error(error);
    }
};

module.exports = listener;
