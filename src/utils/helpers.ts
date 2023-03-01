function createHex() {
    var hexCode1 = ''
    var hexValues1 = '0123456789abcdef'

    for (var i = 0; i < 6; i++) {
        hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length))
    }
    return `#${hexCode1}`
}

export function generateGradient() {
    var deg = Math.floor(Math.random() * 360)

    let hex = createHex()

    var gradient = `linear-gradient(${deg}deg, ${hex}, ${hex})`

    return gradient
}

export function getGradient(chart: any) {
    let hex = createHex()
    console.log(hex)
    const {
        ctx,
        chartArea: { left, right },
    } = chart
    const gradientSeg = ctx.createLinearGradient(left, 0, right, 0)
    gradientSeg.addColorStop(0, hex)
    gradientSeg.addColorStop(0.5, 'white')
    gradientSeg.addColorStop(1, hex)

    return gradientSeg
}
