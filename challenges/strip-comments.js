function solution(text, markers) {
    return text
        .split('\n')
        .map(line => {
            for (const marker of markers) {
                const index = line.indexOf(marker)
                if (index !== -1) {
                    line = line.slice(0, index)
                }
            }
            return line.trimEnd()
        })
        .join('\n')
}