import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('hymns.db');

// Initialize the database and create the hymns table
export const initializeDatabase = () => {
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS hymns (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        lyrics TEXT NOT NULL
      );`,
            [],
            () => console.log('Database initialized'),
            (error) => console.log('Error initializing database:', error)
        );
    });
};

// Insert a new hymn into the database
export const insertHymn = (title, lyrics) => {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO hymns (title, lyrics) VALUES (?, ?);`,
            [title, lyrics],
            (_, result) => console.log('Hymn inserted:', result),
            (error) => console.log('Error inserting hymn:', error)
        );
    });
};

// Fetch all hymns from the database
export const fetchHymns = (callback) => {
    db.transaction((tx) => {
        tx.executeSql(
            `SELECT * FROM hymns ORDER BY title ASC;`,
            [],
            (_, { rows: { _array } }) => callback(_array),
            (error) => console.log('Error fetching hymns:', error)
        );
    });
};

// Export the database instance (optional)
export default db;
