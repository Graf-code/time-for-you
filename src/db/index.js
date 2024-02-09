import * as SQlite from 'expo-sqlite'

const db = SQlite.openDatabase('time-for-you.db')

export const init = () => {
    const promise = new Promise((resolve, reject)=> {
        db.transaction(tx=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (localId TEXTPRIMARY_KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)',
            [],
            ()=>resolve(),
            (tx, error) =>reject(tx, error)
            )
        })
    })
    return promise
}

export const insertSession = (localId, email, token) => {
    const promise = new Promise((resolve, reject)=> {
        db.transaction(tx=>{
            tx.executeSql('INSERT INTO sessions (email, localId, token) VALUES (?, ?, ?);',
            [localId, email, token],
            (tx, result)=>resolve(result),
            (tx,error) => reject(error),
            )
        })
    })
    return promise
}

export const fecthSession = (localId) => {
    const promise = new Promise((resolve, reject)=> {
        db.transaction(tx=>{
            tx.executeSql('SELECT * FROM session WHERE localId ) ? ',
            [localId],
            (tx, result)=>resolve(result),
            (tx,error) => reject(error),
            )
        })
    })
    return promise
}

export const deleteSession = (localId) => {
    const promise = new Promise((resolve, reject)=> {
        db.transaction(tx=>{
            tx.executeSql('DELETE FROM sessions WHERE localId = ?',
            [localId],
            (tx, result)=>resolve(result),
            (tx,error) => reject(error),
            )
        })
    })
    return promise
}