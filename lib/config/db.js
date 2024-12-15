import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://7rajasvaraj:qfjDidCpfediMtxj@cms.ewdyu.mongodb.net/NextJs-todo')
}
console.log("DB Connected");
