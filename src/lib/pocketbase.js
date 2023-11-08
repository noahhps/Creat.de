import PocketBase from 'pocketbase'

const url = 'https://nooked.pockethost.io/'
const pb = new PocketBase(url)
pb.autoCancellation(false)
export default pb;