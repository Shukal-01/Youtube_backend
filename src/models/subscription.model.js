import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,//one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,//(basically channel is also considered as a user) OR one to whom 'subscriber' is subscribing
        ref: "User"
    }
})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)