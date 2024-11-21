function decodeCiphertext(encodedText: string, rows: number): string {
    const m = rows
    const n = encodedText.length / m
    const mat = [...Array(m)].map(() => [])
    for (let i=0; i<encodedText.length; i+=1) {
        mat[Math.floor(i / n)].push(encodedText[i])
    }
    let text = ""
    for (let x=0; x<=mat[0].length; x+=1) {
        for (let i=0; i<Math.min(m, n-x); i+=1) {
            text += mat[i][x+i]
        }
    }
    return text.trimEnd()
};