// const ctx: Worker = self as any
//
// ctx.addEventListener('message', (event) => {
//     console.log('dit is de worker', event.data)
//     if (event.data.num) {
//         ctx.postMessage(event.data.num * event.data.num)
//     }
// })

// export default ctx as any

export default class XsdWorker {
    constructor() {
        this.ctx = self as any

        this.ctx.addEventListener('message', (event) => {
            if (event.data.num) {
                this.ctx.postMessage(event.data.num * event.data.num)
            }
        })
    }

    readonly ctx: Worker
}
