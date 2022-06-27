import {instance} from 'p1-Main/c3-dal';


export const projectAPI = {
    get() {
        return instance.get(`/`)
    },
    create() {
        return instance.post(
            `/`,
            {}
        )
    },
    update() {
        return instance.put(
            `/`,
            {}
        )
    },
    delete() {
        return instance.delete(
            `/`
        )
    },
}