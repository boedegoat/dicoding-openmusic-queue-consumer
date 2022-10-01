const { querySingleRow, queryManyRows } = require("../../utils/db");

module.exports.getPlaylistWithSongs = async ({ playlistId }) => {
    const [playlist, songsInPlaylist] = await Promise.all([
        querySingleRow({
            text: `
                SELECT id, name FROM playlists
                WHERE id = $1
            `,
            values: [playlistId],
        }),
        queryManyRows({
            text: `
                SELECT songs.id, songs.title, songs.performer 
                FROM playlists_songs
                JOIN songs ON songs.id = playlists_songs.song_id
                WHERE playlists_songs.playlist_id = $1
            `,
            values: [playlistId],
        }),
    ]);

    return {
        ...playlist,
        songs: songsInPlaylist,
    };
};
